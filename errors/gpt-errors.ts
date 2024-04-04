class GptError extends Error {
  code: string;

  constructor(message: string, code: string) {
    super(message);
    this.code = code;
  }
}

class APIConnectionError extends GptError {
  constructor(message: string) {
    super(message, "API_CONNECTION_ERROR");
  }
}

class APITimeoutError extends GptError {
  constructor(message: string) {
    super(message, "API_TIMEOUT_ERROR");
  }
}

class AuthenticationError extends GptError {
  constructor(message: string) {
    super(message, "AUTHENTICATION_ERROR");
  }
}

class BadRequestError extends GptError {
  constructor(message: string) {
    super(message, "BAD_REQUEST");
  }
}

class ConflictError extends GptError {
  constructor(message: string) {
    super(message, "CONFLICT");
  }
}

class InternalServerError extends GptError {
  constructor(message: string) {
    super(message, "INTERNAL_SERVER_ERROR");
  }
}

class NotFoundError extends GptError {
  constructor(message: string) {
    super(message, "NOT_FOUND");
  }
}

class PermissionDeniedError extends GptError {
  constructor(message: string) {
    super(message, "PERMISSION_DENIED");
  }
}

class RateLimitError extends GptError {
  constructor(message: string) {
    super(message, "RATE_LIMIT");
  }
}

class UnprocessableEntityError extends GptError {
  constructor(message: string) {
    super(message, "UNPROCESSABLE_ENTITY");
  }
}

class UnhandledError extends GptError {
  constructor(message: string) {
    super(message, "UNHANDLED_ERROR");
  }
}

export const GptErrors = {
  APIConnectionError,
  APITimeoutError,
  AuthenticationError,
  BadRequestError,
  ConflictError,
  InternalServerError,
  NotFoundError,
  PermissionDeniedError,
  RateLimitError,
  UnprocessableEntityError,
  UnhandledError,
};