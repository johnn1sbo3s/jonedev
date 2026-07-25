#!/usr/bin/env node

/**
 * Pre-commit hook: Validate Vue script setup order
 * 
 * Checks that <script setup> blocks follow the required order:
 * 1. definePageMeta
 * 2. Composable destructuring
 * 3. Imports
 * 4. ref/reactive declarations
 * 5. computed properties
 * 6. Function definitions
 * 7. Lifecycle hooks
 * 8. watch declarations
 */

const { readFileSync } = require('fs');
const { resolve } = require('path');

const FILES = process.argv.slice(2);

if (FILES.length === 0) {
  console.log('No files to check');
  process.exit(0);
}

let hasErrors = false;

for (const file of FILES) {
  if (!file.endsWith('.vue')) continue;
  
  try {
    const content = readFileSync(resolve(file), 'utf-8');
    const scriptMatch = content.match(/<script\s+setup[^>]*>([\s\S]*?)<\/script>/);
    
    if (!scriptMatch) continue;
    
    const scriptContent = scriptMatch[1];
    const lines = scriptContent.split('\n');
    
    // Track order of declarations
    const order = [];
    let currentSection = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip empty lines and comments
      if (!line || line.startsWith('//') || line.startsWith('*')) continue;
      
      // Detect sections
      if (line.includes('definePageMeta')) {
        if (currentSection && currentSection !== 'definePageMeta' && currentSection !== 'imports') {
          console.warn(`⚠️  ${file}:${i + 1}: definePageMeta should come right after imports`);
          hasErrors = true;
        }
        currentSection = 'definePageMeta';
        order.push({ section: 'definePageMeta', line: i + 1 });
      } else if (line.match(/^(const|let)\s+\{.*\}\s*=\s*use[A-Z]/)) {
        // Composable destructuring: const { x } = useXxx()
        if (currentSection && !['definePageMeta', 'composables'].includes(currentSection)) {
          console.warn(`⚠️  ${file}:${i + 1}: Composable destructuring should come after definePageMeta`);
          hasErrors = true;
        }
        currentSection = 'composables';
        order.push({ section: 'composables', line: i + 1 });
      } else if (line.startsWith('import ')) {
        currentSection = 'imports';
        order.push({ section: 'imports', line: i + 1 });
      } else if (line.match(/^function\s+\w+/) && !line.match(/async function/)) {
        // Pure helper functions (no async, no side effects)
        if (currentSection && !['definePageMeta', 'composables', 'imports', 'helpers'].includes(currentSection)) {
          console.warn(`⚠️  ${file}:${i + 1}: Helper functions should come before state declarations`);
          hasErrors = true;
        }
        currentSection = 'helpers';
        order.push({ section: 'helpers', line: i + 1 });
      } else if (line.match(/^(const|let)\s+\w+\s*=\s*(ref|reactive)\(/)) {
        // State declarations
        if (currentSection && !['definePageMeta', 'composables', 'imports', 'helpers', 'state'].includes(currentSection)) {
          console.warn(`⚠️  ${file}:${i + 1}: State declarations should come before computed/action functions`);
          hasErrors = true;
        }
        currentSection = 'state';
        order.push({ section: 'state', line: i + 1 });
      } else if (line.match(/^const\s+\w+\s*=\s*computed\(/)) {
        // Computed properties
        if (currentSection && !['definePageMeta', 'composables', 'imports', 'helpers', 'state', 'computed'].includes(currentSection)) {
          console.warn(`⚠️  ${file}:${i + 1}: Computed properties should come before action functions`);
          hasErrors = true;
        }
        currentSection = 'computed';
        order.push({ section: 'computed', line: i + 1 });
      } else if (line.match(/^(async\s+)?function\s+\w+/) || line.match(/^(const|let)\s+\w+\s*=\s*(async\s+)?\(/)) {
        // Action functions (with side effects)
        if (currentSection && !['definePageMeta', 'composables', 'imports', 'helpers', 'state', 'computed', 'functions'].includes(currentSection)) {
          console.warn(`⚠️  ${file}:${i + 1}: Action functions should come before lifecycle hooks`);
          hasErrors = true;
        }
        currentSection = 'functions';
        order.push({ section: 'functions', line: i + 1 });
      } else if (line.match(/^(onMounted|onUnmounted|onBeforeMount|onUpdated)/)) {
        // Lifecycle hooks
        if (currentSection && !['definePageMeta', 'composables', 'imports', 'helpers', 'state', 'computed', 'functions', 'lifecycle'].includes(currentSection)) {
          console.warn(`⚠️  ${file}:${i + 1}: Lifecycle hooks should come before watch`);
          hasErrors = true;
        }
        currentSection = 'lifecycle';
        order.push({ section: 'lifecycle', line: i + 1 });
      } else if (line.startsWith('watch(')) {
        // Watch declarations
        if (currentSection && !['definePageMeta', 'composables', 'imports', 'helpers', 'state', 'computed', 'functions', 'lifecycle', 'watch'].includes(currentSection)) {
          console.warn(`⚠️  ${file}:${i + 1}: Watch should be last in script setup`);
          hasErrors = true;
        }
        currentSection = 'watch';
        order.push({ section: 'watch', line: i + 1 });
      }
    }
    
    // Log summary if there were issues
    if (order.length > 0 && hasErrors) {
      console.log(`\n📋 Script order detected in ${file}:`);
      order.forEach(({ section, line }) => {
        console.log(`   Line ${line}: ${section}`);
      });
      console.log('');
    }
    
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

if (hasErrors) {
  console.log('\n⚠️  Script order recommendations detected.');
  console.log('For better code organization, consider following this order:');
  console.log('imports → definePageMeta → composables → helper functions → state → computed → action functions → lifecycle → watch\n');
  console.log('This is currently a recommendation. Fix incrementally as you modify files.\n');
  // Don't block commit - allow incremental fixes
  process.exit(0);
} else {
  console.log('✅ Script order validation passed');
  process.exit(0);
}
