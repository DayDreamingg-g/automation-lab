const data = $input.first().json;

const message = (data.errorMessage || "").toLowerCase();

let errorType = "unknown";
let errorSubtype = "unknown";

const hasAny = (...patterns) =>
  patterns.some(pattern => message.includes(pattern));


// ======================================================
// NETWORK
// ======================================================

// DNS / hostname resolution
if (hasAny(
  "enotfound",
  "getaddrinfo",
  "eai_again",
  "dns lookup",
  "dns resolution",
  "unknown host",
  "hostname not found",
  "could not resolve",
  "failed to resolve",
  "name resolution"
)) {
  errorType = "network";
  errorSubtype = "dns";
}

// Timeout
else if (hasAny(
  "etimedout",
  "esockettimedout",
  "connection timed out",
  "connection timeout",
  "connect timeout",
  "socket timeout",
  "request timeout",
  "network timeout"
)) {
  errorType = "network";
  errorSubtype = "timeout";
}

// TLS / SSL / certificates
else if (hasAny(
  "tls",
  "ssl",
  "certificate",
  "self signed certificate",
  "certificate has expired",
  "unable to verify",
  "unable to get local issuer certificate",
  "certificate verify failed",
  "wrong version number"
)) {
  errorType = "network";
  errorSubtype = "tls";
}

// Connection
else if (hasAny(
  "econnrefused",
  "econnreset",
  "econnaborted",
  "enetunreach",
  "ehostunreach",
  "connection refused",
  "connection reset",
  "connection aborted",
  "connection failed",
  "connection cannot be established",
  "could not connect",
  "failed to connect",
  "unable to connect",
  "network unreachable",
  "host unreachable",
  "incorrect host",
  "invalid host",
  "socket hang up",
  "socket closed"
)) {
  errorType = "network";
  errorSubtype = "connection";
}


// ======================================================
// HTTP
// ======================================================

// 429
else if (hasAny(
  "429",
  "too many requests",
  "rate limit",
  "rate_limit",
  "rate limit exceeded"
)) {
  errorType = "http";
  errorSubtype = "rate_limit";
}

// 401
else if (hasAny(
  "401",
  "unauthorized"
)) {
  errorType = "http";
  errorSubtype = "auth";
}

// 403
else if (hasAny(
  "403",
  "forbidden"
)) {
  errorType = "http";
  errorSubtype = "forbidden";
}

// 404
else if (hasAny(
  "404",
  "http resource not found"
)) {
  errorType = "http";
  errorSubtype = "not_found";
}

// 409
else if (hasAny(
  "409",
  "conflict"
)) {
  errorType = "http";
  errorSubtype = "conflict";
}

// 422
else if (hasAny(
  "422",
  "unprocessable entity",
  "unprocessable content"
)) {
  errorType = "http";
  errorSubtype = "validation";
}

// Gateway errors
else if (hasAny(
  "502",
  "bad gateway",
  "504",
  "gateway timeout"
)) {
  errorType = "http";
  errorSubtype = "gateway";
}

// Server errors
else if (hasAny(
  "500",
  "501",
  "503",
  "505",
  "internal server error",
  "service unavailable",
  "server error"
)) {
  errorType = "http";
  errorSubtype = "server_error";
}

// Other 4xx
else if (hasAny(
  "400",
  "bad request",
  "405",
  "method not allowed",
  "406",
  "not acceptable",
  "408",
  "request timeout",
  "410",
  "gone",
  "413",
  "payload too large",
  "415",
  "unsupported media type"
)) {
  errorType = "http";
  errorSubtype = "bad_request";
}


// ======================================================
// AUTH
// ======================================================

// Expired token
else if (hasAny(
  "token expired",
  "expired token",
  "jwt expired",
  "jwt expired",
  "token has expired"
)) {
  errorType = "auth";
  errorSubtype = "token_expired";
}

// Permissions
else if (hasAny(
  "permission denied",
  "insufficient permissions",
  "insufficient privileges",
  "access denied",
  "not permitted"
)) {
  errorType = "auth";
  errorSubtype = "permission";
}

// Credentials
else if (hasAny(
  "invalid api key",
  "api key invalid",
  "invalid token",
  "invalid credentials",
  "authentication failed",
  "authentication required",
  "credentials are invalid",
  "credentials missing",
  "missing credentials"
)) {
  errorType = "auth";
  errorSubtype = "credentials";
}


// ======================================================
// DATABASE
// ======================================================

// Duplicate / unique
else if (hasAny(
  "duplicate key",
  "duplicate entry",
  "unique constraint",
  "unique constraint failed",
  "already exists"
)) {
  errorType = "database";
  errorSubtype = "duplicate";
}

// Constraints
else if (hasAny(
  "foreign key constraint",
  "constraint failed",
  "not-null constraint",
  "not null constraint",
  "violates foreign key",
  "violates constraint"
)) {
  errorType = "database";
  errorSubtype = "constraint";
}

// Database connection
else if (hasAny(
  "database connection",
  "connection to database",
  "database unavailable",
  "could not connect to database",
  "too many connections"
)) {
  errorType = "database";
  errorSubtype = "connection";
}

// Query
else if (hasAny(
  "sql syntax",
  "syntax error at or near",
  "query failed",
  "database query",
  "invalid query"
)) {
  errorType = "database";
  errorSubtype = "query";
}


// ======================================================
// DATA
// ======================================================

// JSON parsing
else if (hasAny(
  "json parse",
  "invalid json",
  "unexpected token",
  "unexpected end of json",
  "json syntax",
  "parse error"
)) {
  errorType = "data";
  errorSubtype = "json_parse";
}

// Missing data
else if (hasAny(
  "required field",
  "missing field",
  "missing parameter",
  "required parameter",
  "required property",
  "is required"
)) {
  errorType = "data";
  errorSubtype = "missing_data";
}

// Type problems
else if (hasAny(
  "typeerror",
  "type error",
  "expected string",
  "expected number",
  "expected object",
  "expected array",
  "invalid type"
)) {
  errorType = "data";
  errorSubtype = "type";
}

// General validation
else if (hasAny(
  "validation failed",
  "validation error",
  "invalid input",
  "invalid value",
  "invalid format"
)) {
  errorType = "data";
  errorSubtype = "validation";
}


// ======================================================
// WORKFLOW / N8N
// ======================================================

// Expressions
else if (hasAny(
  "expression error",
  "invalid expression",
  "referenced node",
  "can't get data for expression",
  "cannot get data for expression"
)) {
  errorType = "workflow";
  errorSubtype = "expression";
}

// Configuration
else if (hasAny(
  "not configured",
  "configuration error",
  "missing configuration",
  "parameter is required",
  "credentials not found"
)) {
  errorType = "workflow";
  errorSubtype = "configuration";
}

// Node
else if (hasAny(
  "node execution",
  "node failed",
  "problem in node"
)) {
  errorType = "workflow";
  errorSubtype = "node";
}


// ======================================================
// RESOURCE
// ======================================================

else if (hasAny(
  "resource not found",
  "record not found",
  "entity not found"
)) {
  errorType = "resource";
  errorSubtype = "not_found";
}

else if (hasAny(
  "resource unavailable",
  "temporarily unavailable"
)) {
  errorType = "resource";
  errorSubtype = "unavailable";
}


// ======================================================
// RESULT
// ======================================================

data.errorType = errorType;
data.errorSubtype = errorSubtype;

return [{ json: data }];