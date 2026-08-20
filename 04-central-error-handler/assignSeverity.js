const data = $input.first().json;

const errorType = data.errorType || "unknown";
const errorSubtype = data.errorSubtype || "unknown";

let severity = "medium";


// ======================================================
// CRITICAL
// ======================================================

if (
  errorType === "workflow" &&
  errorSubtype === "configuration"
) {
  severity = "critical";
}

else if (
  errorType === "database" &&
  errorSubtype === "connection"
) {
  severity = "critical";
}


// ======================================================
// HIGH
// ======================================================

else if (
  errorType === "network"
) {
  severity = "high";
}

else if (
  errorType === "http" &&
  [
    "server_error",
    "gateway"
  ].includes(errorSubtype)
) {
  severity = "high";
}

else if (
  errorType === "workflow" &&
  [
    "node",
    "expression"
  ].includes(errorSubtype)
) {
  severity = "high";
}

else if (
  errorType === "database" &&
  [
    "query",
    "constraint"
  ].includes(errorSubtype)
) {
  severity = "high";
}


// ======================================================
// MEDIUM
// ======================================================

else if (
  errorType === "auth"
) {
  severity = "medium";
}

else if (
  errorType === "http" &&
  [
    "rate_limit",
    "auth",
    "forbidden",
    "conflict"
  ].includes(errorSubtype)
) {
  severity = "medium";
}

else if (
  errorType === "database" &&
  errorSubtype === "duplicate"
) {
  severity = "medium";
}

else if (
  errorType === "resource"
) {
  severity = "medium";
}


// ======================================================
// LOW
// ======================================================

else if (
  errorType === "data"
) {
  severity = "low";
}

else if (
  errorType === "http" &&
  [
    "not_found",
    "validation",
    "bad_request"
  ].includes(errorSubtype)
) {
  severity = "low";
}


// ======================================================
// UNKNOWN
// ======================================================

else if (
  errorType === "unknown" ||
  errorSubtype === "unknown"
) {
  severity = "high";
}


// ======================================================
// RESULT
// ======================================================

data.severity = severity;

return [{ json: data }];