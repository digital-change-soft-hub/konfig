# coding: utf-8

"""
    python-pydantic-raw-http-doc-with-top-level-configuration API

    A simple API based for testing python-pydantic-raw-http-doc-with-top-level-configuration.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest
from unittest.mock import patch

import urllib3

import python_pydantic_raw_http_doc_with_top_level_configuration
from python_pydantic_raw_http_doc_with_top_level_configuration.paths.simple_endpoint import get
from python_pydantic_raw_http_doc_with_top_level_configuration import configuration, schemas, api_client

from .. import ApiTestMixin


class TestSimpleEndpoint(ApiTestMixin, unittest.TestCase):
    """
    SimpleEndpoint unit test stubs
        Fetches a JSON value based on input parameter
    """

    def setUp(self):
        pass

    def tearDown(self):
        pass

    response_status = 200




if __name__ == '__main__':
    unittest.main()
