# coding: utf-8

"""
    SnapTrade

    Connect brokerage accounts to your app for live positions and trading

    The version of the OpenAPI document: 1.0.0
    Contact: api@snaptrade.com
    Created by: https://snaptrade.com/
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from snaptrade_client import schemas  # noqa: F401


class BrokerageSymbol(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)

    Brokerage symbol
    """


    class MetaOapg:
        
        class properties:
            id = schemas.UUIDSchema
        
            @staticmethod
            def symbol() -> typing.Type['UniversalSymbolNullable']:
                return UniversalSymbolNullable
        
            @staticmethod
            def brokerage_authorization() -> typing.Type['BrokerageAuthorization']:
                return BrokerageAuthorization
            description = schemas.StrSchema
            
            
            class allows_fractional_units(
                schemas.BoolBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneBoolMixin
            ):
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, bool, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'allows_fractional_units':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
        
            @staticmethod
            def option_symbol() -> typing.Type['OptionsSymbolNullable']:
                return OptionsSymbolNullable
            __annotations__ = {
                "id": id,
                "symbol": symbol,
                "brokerage_authorization": brokerage_authorization,
                "description": description,
                "allows_fractional_units": allows_fractional_units,
                "option_symbol": option_symbol,
            }
        additional_properties = schemas.AnyTypeSchema
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["symbol"]) -> 'UniversalSymbolNullable': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["brokerage_authorization"]) -> 'BrokerageAuthorization': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["description"]) -> MetaOapg.properties.description: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["allows_fractional_units"]) -> MetaOapg.properties.allows_fractional_units: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["option_symbol"]) -> 'OptionsSymbolNullable': ...
    
    @typing.overload
    def __getitem__(self, name: str) -> MetaOapg.additional_properties: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["id"], typing_extensions.Literal["symbol"], typing_extensions.Literal["brokerage_authorization"], typing_extensions.Literal["description"], typing_extensions.Literal["allows_fractional_units"], typing_extensions.Literal["option_symbol"], str, ]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> typing.Union[MetaOapg.properties.id, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["symbol"]) -> typing.Union['UniversalSymbolNullable', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["brokerage_authorization"]) -> typing.Union['BrokerageAuthorization', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["description"]) -> typing.Union[MetaOapg.properties.description, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["allows_fractional_units"]) -> typing.Union[MetaOapg.properties.allows_fractional_units, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["option_symbol"]) -> typing.Union['OptionsSymbolNullable', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[MetaOapg.additional_properties, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["id"], typing_extensions.Literal["symbol"], typing_extensions.Literal["brokerage_authorization"], typing_extensions.Literal["description"], typing_extensions.Literal["allows_fractional_units"], typing_extensions.Literal["option_symbol"], str, ]):
        return super().get_item_oapg(name)

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        id: typing.Union[MetaOapg.properties.id, str, uuid.UUID, schemas.Unset] = schemas.unset,
        symbol: typing.Union['UniversalSymbolNullable', schemas.Unset] = schemas.unset,
        brokerage_authorization: typing.Union['BrokerageAuthorization', schemas.Unset] = schemas.unset,
        description: typing.Union[MetaOapg.properties.description, str, schemas.Unset] = schemas.unset,
        allows_fractional_units: typing.Union[MetaOapg.properties.allows_fractional_units, None, bool, schemas.Unset] = schemas.unset,
        option_symbol: typing.Union['OptionsSymbolNullable', schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, ],
    ) -> 'BrokerageSymbol':
        return super().__new__(
            cls,
            *args,
            id=id,
            symbol=symbol,
            brokerage_authorization=brokerage_authorization,
            description=description,
            allows_fractional_units=allows_fractional_units,
            option_symbol=option_symbol,
            _configuration=_configuration,
            **kwargs,
        )

from snaptrade_client.model.brokerage_authorization import BrokerageAuthorization
from snaptrade_client.model.options_symbol_nullable import OptionsSymbolNullable
from snaptrade_client.model.universal_symbol_nullable import UniversalSymbolNullable