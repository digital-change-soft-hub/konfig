"""
    python-async-timeout-with-top-level-operation API

    A simple API based for testing python-async-timeout-with-top-level-operation.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from typing import Callable, Generic, TypeVar, Any

F = TypeVar("F", bound=Callable[..., Any])


class copy_signature(Generic[F]):
    def __init__(self, func: F, *args) -> None:
        self.func = func

    def __call__(self, *args, **kwargs) -> F:
        if len(args) == 1:
            return args[0]
        return self.func(*args, **kwargs)