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


class OptionsSymbolNullable(
    schemas.DictBase,
    schemas.NoneBase,
    schemas.Schema,
    schemas.NoneFrozenDictMixin
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)

    Options Symbol
    """


    class MetaOapg:
        required = {
            "ticker",
            "option_type",
            "underlying_symbol",
            "id",
            "expiration_date",
            "strike_price",
        }
        
        class properties:
            id = schemas.UUIDSchema
            ticker = schemas.StrSchema
            
            
            class option_type(
                schemas.EnumBase,
                schemas.StrSchema
            ):
                
                @schemas.classproperty
                def CALL(cls):
                    return cls("CALL")
                
                @schemas.classproperty
                def PUT(cls):
                    return cls("PUT")
            strike_price = schemas.NumberSchema
            expiration_date = schemas.StrSchema
        
            @staticmethod
            def underlying_symbol() -> typing.Type['UnderlyingSymbol']:
                return UnderlyingSymbol
            is_mini_option = schemas.BoolSchema
            local_id = schemas.StrSchema
            exchange_id = schemas.UUIDSchema
            __annotations__ = {
                "id": id,
                "ticker": ticker,
                "option_type": option_type,
                "strike_price": strike_price,
                "expiration_date": expiration_date,
                "underlying_symbol": underlying_symbol,
                "is_mini_option": is_mini_option,
                "local_id": local_id,
                "exchange_id": exchange_id,
            }
        additional_properties = schemas.AnyTypeSchema

    
    ticker: MetaOapg.properties.ticker
    option_type: MetaOapg.properties.option_type
    underlying_symbol: 'UnderlyingSymbol'
    id: MetaOapg.properties.id
    expiration_date: MetaOapg.properties.expiration_date
    strike_price: MetaOapg.properties.strike_price
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["ticker"]) -> MetaOapg.properties.ticker: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["option_type"]) -> MetaOapg.properties.option_type: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["underlying_symbol"]) -> 'UnderlyingSymbol': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["expiration_date"]) -> MetaOapg.properties.expiration_date: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["strike_price"]) -> MetaOapg.properties.strike_price: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["is_mini_option"]) -> MetaOapg.properties.is_mini_option: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["local_id"]) -> MetaOapg.properties.local_id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["exchange_id"]) -> MetaOapg.properties.exchange_id: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> MetaOapg.additional_properties: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["ticker"], typing_extensions.Literal["option_type"], typing_extensions.Literal["underlying_symbol"], typing_extensions.Literal["id"], typing_extensions.Literal["expiration_date"], typing_extensions.Literal["strike_price"], typing_extensions.Literal["is_mini_option"], typing_extensions.Literal["local_id"], typing_extensions.Literal["exchange_id"], str, ]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["ticker"]) -> MetaOapg.properties.ticker: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["option_type"]) -> MetaOapg.properties.option_type: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["underlying_symbol"]) -> 'UnderlyingSymbol': ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["id"]) -> MetaOapg.properties.id: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["expiration_date"]) -> MetaOapg.properties.expiration_date: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["strike_price"]) -> MetaOapg.properties.strike_price: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["is_mini_option"]) -> typing.Union[MetaOapg.properties.is_mini_option, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["local_id"]) -> typing.Union[MetaOapg.properties.local_id, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["exchange_id"]) -> typing.Union[MetaOapg.properties.exchange_id, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[MetaOapg.additional_properties, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["ticker"], typing_extensions.Literal["option_type"], typing_extensions.Literal["underlying_symbol"], typing_extensions.Literal["id"], typing_extensions.Literal["expiration_date"], typing_extensions.Literal["strike_price"], typing_extensions.Literal["is_mini_option"], typing_extensions.Literal["local_id"], typing_extensions.Literal["exchange_id"], str, ]):
        return super().get_item_oapg(name)

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, None, ],
        is_mini_option: typing.Union[MetaOapg.properties.is_mini_option, bool, schemas.Unset] = schemas.unset,
        local_id: typing.Union[MetaOapg.properties.local_id, str, schemas.Unset] = schemas.unset,
        exchange_id: typing.Union[MetaOapg.properties.exchange_id, str, uuid.UUID, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, ],
    ) -> 'OptionsSymbolNullable':
        return super().__new__(
            cls,
            *args,
            is_mini_option=is_mini_option,
            local_id=local_id,
            exchange_id=exchange_id,
            _configuration=_configuration,
            **kwargs,
        )

from snaptrade_client.model.underlying_symbol import UnderlyingSymbol