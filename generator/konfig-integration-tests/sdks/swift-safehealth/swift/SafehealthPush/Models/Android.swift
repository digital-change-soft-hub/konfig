//
// Android.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct Android: Codable, JSONEncodable, Hashable {

    public var channels: AndroidChannels?

    public init(channels: AndroidChannels? = nil) {
        self.channels = channels
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case channels
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(channels, forKey: .channels)
    }
}

