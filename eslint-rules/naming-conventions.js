/**
 * ESLint rule: Enforce naming conventions
 *
 * Rules:
 * 1. No abbreviations in function names
 */

const ABBREVIATIONS = [
  "crt",
  "upd",
  "del",
  "btn",
  "img",
  "msg",
  "num",
  "txt",
  "elem",
  "idx",
  "len",
  "arr",
  "obj",
  "fn",
  "prop",
  "ref",
  "val",
  "err",
  "req",
  "res",
  "cfg",
  "env",
  "dev",
  "prod",
  "min",
  "max",
  "avg",
  "cnt",
  "tmp",
  "src",
  "dst",
  "dest",
];

export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow abbreviations in function names",
      category: "Best Practices",
      recommended: true,
    },
    fixable: null,
    schema: [],
    messages: {
      abbreviationDetected:
        "Function '{{name}}' contains abbreviation '{{abbr}}'. Use full word instead (e.g., '{{suggestion}}')",
    },
  },
  create(context) {
    return {
      FunctionDeclaration(node) {
        const name = node.id.name;
        checkAbbreviations(name, node, context);
      },

      VariableDeclarator(node) {
        if (
          node.id.type === "Identifier" &&
          node.init &&
          (node.init.type === "ArrowFunctionExpression" ||
            node.init.type === "FunctionExpression")
        ) {
          const name = node.id.name;
          checkAbbreviations(name, node, context);
        }
      },
    };
  },
};

function checkAbbreviations(name, node, context) {
  // Skip private functions and test functions
  if (
    name.startsWith("_") ||
    name.startsWith("test") ||
    name.startsWith("it") ||
    name.startsWith("describe")
  ) {
    return;
  }

  const lowerName = name.toLowerCase();

  for (const abbr of ABBREVIATIONS) {
    // Match whole word boundaries or camelCase segments
    const pattern = new RegExp(`(^|[^a-z])${abbr}([^a-z]|$)`, "i");
    if (pattern.test(lowerName)) {
      const suggestion = getSuggestion(name, abbr);
      context.report({
        node,
        messageId: "abbreviationDetected",
        data: { name, abbr, suggestion },
      });
      return;
    }
  }
}

function getSuggestion(name, abbr) {
  const suggestions = {
    crt: "create",
    upd: "update",
    del: "delete",
    btn: "button",
    img: "image",
    msg: "message",
    num: "number",
    txt: "text",
    elem: "element",
    idx: "index",
    len: "length",
    arr: "array",
    obj: "object",
    fn: "function",
    prop: "property",
    ref: "reference",
    val: "value",
    err: "error",
    req: "request",
    res: "response",
    cfg: "config",
    env: "environment",
    dev: "development",
    prod: "production",
    min: "minimum",
    max: "maximum",
    avg: "average",
    cnt: "count",
    tmp: "temp",
    src: "source",
    dst: "destination",
    dest: "destination",
  };

  const fullWord = suggestions[abbr] || abbr;
  return name.replace(new RegExp(abbr, "i"), fullWord);
}
