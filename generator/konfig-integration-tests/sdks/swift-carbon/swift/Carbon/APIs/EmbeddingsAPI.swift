//
// EmbeddingsAPI.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class EmbeddingsAPI {

    let client: CarbonClient

    public init(client: CarbonClient) {
        self.client = client
    }

    /**
     Embeddings
     
     - parameter getEmbeddingDocumentsBody: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getDocumentsSync(getEmbeddingDocumentsBody: GetEmbeddingDocumentsBody, apiResponseQueue: DispatchQueue = CarbonAPI.apiResponseQueue, completion: @escaping ((_ data: DocumentResponseList?, _ error: Error?) -> Void)) -> RequestTask {
        return getDocumentsWithRequestBuilder(getEmbeddingDocumentsBody: getEmbeddingDocumentsBody).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Embeddings
     
     - parameter getEmbeddingDocumentsBody: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    private class func getDocumentsAsyncMappedParams(getEmbeddingDocumentsBody: GetEmbeddingDocumentsBody) async throws -> DocumentResponseList {
        return try await withCheckedThrowingContinuation { continuation in
            getDocumentsWithRequestBuilder(getEmbeddingDocumentsBody: getEmbeddingDocumentsBody).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }

    /**
     Embeddings
     
     - parameter getEmbeddingDocumentsBody: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open class func getDocuments(
        query: String,
        k: Int,
        tags: [String: Tags1]? = nil, 
        queryVector: [Double]? = nil, 
        fileIds: [Int]? = nil, 
        parentFileIds: [Int]? = nil, 
        tagsV2: AnyCodable? = nil, 
        includeTags: Bool? = nil, 
        includeVectors: Bool? = nil, 
        includeRawFile: Bool? = nil, 
        hybridSearch: Bool? = nil, 
        hybridSearchTuningParameters: HybridSearchTuningParamsNullable? = nil, 
        mediaType: FileContentTypesNullable? = nil, 
        embeddingModel: EmbeddingGeneratorsNullable? = nil
    ) async throws -> DocumentResponseList {
        let getEmbeddingDocumentsBody = GetEmbeddingDocumentsBody(
            tags: tags,
            query: query,
            queryVector: queryVector,
            k: k,
            fileIds: fileIds,
            parentFileIds: parentFileIds,
            tagsV2: tagsV2,
            includeTags: includeTags,
            includeVectors: includeVectors,
            includeRawFile: includeRawFile,
            hybridSearch: hybridSearch,
            hybridSearchTuningParameters: hybridSearchTuningParameters,
            mediaType: mediaType,
            embeddingModel: embeddingModel
        )
        return try await withCheckedThrowingContinuation { continuation in
            getDocumentsWithRequestBuilder(getEmbeddingDocumentsBody: getEmbeddingDocumentsBody).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }


    /**
     Embeddings
     
     - parameter getEmbeddingDocumentsBody: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open func getDocuments(
        query: String,
        k: Int,
        tags: [String: Tags1]? = nil, 
        queryVector: [Double]? = nil, 
        fileIds: [Int]? = nil, 
        parentFileIds: [Int]? = nil, 
        tagsV2: AnyCodable? = nil, 
        includeTags: Bool? = nil, 
        includeVectors: Bool? = nil, 
        includeRawFile: Bool? = nil, 
        hybridSearch: Bool? = nil, 
        hybridSearchTuningParameters: HybridSearchTuningParamsNullable? = nil, 
        mediaType: FileContentTypesNullable? = nil, 
        embeddingModel: EmbeddingGeneratorsNullable? = nil
    ) async throws -> DocumentResponseList {
        let getEmbeddingDocumentsBody = GetEmbeddingDocumentsBody(
            tags: tags,
            query: query,
            queryVector: queryVector,
            k: k,
            fileIds: fileIds,
            parentFileIds: parentFileIds,
            tagsV2: tagsV2,
            includeTags: includeTags,
            includeVectors: includeVectors,
            includeRawFile: includeRawFile,
            hybridSearch: hybridSearch,
            hybridSearchTuningParameters: hybridSearchTuningParameters,
            mediaType: mediaType,
            embeddingModel: embeddingModel
        )
        return try await withCheckedThrowingContinuation { continuation in
            getDocumentsWithRequestBuilder(getEmbeddingDocumentsBody: getEmbeddingDocumentsBody).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }



    /**
     Embeddings
     - POST /embeddings
     - For pre-filtering documents, using `tags_v2` is preferred to using `tags` (which is now deprecated). If both `tags_v2` and `tags` are specified, `tags` is ignored. `tags_v2` enables building complex filters through the use of \"AND\", \"OR\", and negation logic. Take the below input as an example: ```json {     \"OR\": [         {             \"key\": \"subject\",             \"value\": \"holy-bible\",             \"negate\": false         },         {             \"key\": \"person-of-interest\",             \"value\": \"jesus christ\",             \"negate\": false         },         {             \"key\": \"genre\",             \"value\": \"religion\",             \"negate\": true         }         {             \"AND\": [                 {                     \"key\": \"subject\",                     \"value\": \"tao-te-ching\",                     \"negate\": false                 },                 {                     \"key\": \"author\",                     \"value\": \"lao-tzu\",                     \"negate\": false                 }             ]         }     ] } ``` In this case, files will be filtered such that: 1. \"subject\" = \"holy-bible\" OR 2. \"person-of-interest\" = \"jesus christ\" OR 3. \"genre\" != \"religion\" OR 4. \"subject\" = \"tao-te-ching\" AND \"author\" = \"lao-tzu\"  Note that the top level of the query must be either an \"OR\" or \"AND\" array. Currently, nesting is limited to 3. For tag blocks (those with \"key\", \"value\", and \"negate\" keys), the following typing rules apply: 1. \"key\" isn't optional and must be a `string` 2. \"value\" isn't optional and can be `any` or list[`any`] 3. \"negate\" is optional and must be `true` or `false`. If present and `true`, then the filter block is negated in the resulting query. It is `false` by default.   When querying embeddings, you can optionally specify the `media_type` parameter in your request. By default (if not set), it is equal to \"TEXT\". This means that the query will be performed over files that have been parsed as text (for now, this covers all files except image files). If it is equal to \"IMAGE\", the query will be performed over image files (for now, `.jpg` and `.png` files). You can think of this field as an additional filter on top of any filters set in `file_ids` and   When `hybrid_search` is set to true, a combination of keyword search and semantic search are used to rank and select candidate embeddings during information retrieval. By default, these search methods are weighted equally during the ranking process. To adjust the weight (or \"importance\") of each search method, you can use the `hybrid_search_tuning_parameters` property. The description for the different tuning parameters are: - `weight_a`: weight to assign to semantic search - `weight_b`: weight to assign to keyword search  You must ensure that `sum(weight_a, weight_b,..., weight_n)` for all *n* weights is equal to 1. The equality has an error tolerance of 0.001 to account for possible floating point issues.  In order to use hybrid search for a customer across a set of documents, two flags need to be enabled: 1. Use the `/modify_user_configuration` endpoint to to enable `sparse_vectors` for the customer. The payload body for this request is below: ``` {   \"configuration_key_name\": \"sparse_vectors\",   \"value\": {     \"enabled\": true   } } ``` 2. Make sure hybrid search is enabled for the documents across which you want to perform the search. For the `/uploadfile` endpoint, this can be done by setting the following query parameter: `generate_sparse_vectors=true`   Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI's multimodal model; for text, we support OpenAI's `text-embedding-ada-002` and Cohere's embed-multilingual-v3.0. The model can be specified via the `embedding_model` parameter (in the POST body for `/embeddings`, and a query  parameter in `/uploadfile`). If no model is supplied, the `text-embedding-ada-002` is used by default. When performing embedding queries, embeddings from files that used the specified model will be considered in the query. For example, if files A and B have embeddings generated with `OPENAI`, and files C and D have embeddings generated with `COHERE_MULTILINGUAL_V3`, then by default, queries will only consider files A and B. If `COHERE_MULTILINGUAL_V3` is specified as the `embedding_model` in `/embeddings`, then only files C and D will be considered. Make sure that the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not** set `VERTEX_MULTIMODAL` as an `embedding_model`. This model is used automatically by Carbon when it detects an image file.
     - API Key:
       - type: apiKey authorization 
       - name: accessToken
     - API Key:
       - type: apiKey authorization 
       - name: apiKey
     - API Key:
       - type: apiKey customer-id 
       - name: customerId
     - parameter getEmbeddingDocumentsBody: (body)  
     - returns: RequestBuilder<DocumentResponseList> 
     */
    open class func getDocumentsWithRequestBuilder(
            getEmbeddingDocumentsBody: GetEmbeddingDocumentsBody
    ) -> RequestBuilder<DocumentResponseList> {
        let basePath = CarbonAPI.basePath;
        let localVariablePath = "/embeddings"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: getEmbeddingDocumentsBody)

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: CarbonAPI.accessToken, prefix: "Token ")
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: CarbonAPI.apiKey, prefix: "Bearer ")
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "customer-id", value: CarbonAPI.customerId, prefix: nil)
            let localVariableRequestBuilder: RequestBuilder<DocumentResponseList>.Type = CarbonAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "POST", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to POST /embeddings")
    }

    /**
     Embeddings
     - POST /embeddings
     - For pre-filtering documents, using `tags_v2` is preferred to using `tags` (which is now deprecated). If both `tags_v2` and `tags` are specified, `tags` is ignored. `tags_v2` enables building complex filters through the use of \"AND\", \"OR\", and negation logic. Take the below input as an example: ```json {     \"OR\": [         {             \"key\": \"subject\",             \"value\": \"holy-bible\",             \"negate\": false         },         {             \"key\": \"person-of-interest\",             \"value\": \"jesus christ\",             \"negate\": false         },         {             \"key\": \"genre\",             \"value\": \"religion\",             \"negate\": true         }         {             \"AND\": [                 {                     \"key\": \"subject\",                     \"value\": \"tao-te-ching\",                     \"negate\": false                 },                 {                     \"key\": \"author\",                     \"value\": \"lao-tzu\",                     \"negate\": false                 }             ]         }     ] } ``` In this case, files will be filtered such that: 1. \"subject\" = \"holy-bible\" OR 2. \"person-of-interest\" = \"jesus christ\" OR 3. \"genre\" != \"religion\" OR 4. \"subject\" = \"tao-te-ching\" AND \"author\" = \"lao-tzu\"  Note that the top level of the query must be either an \"OR\" or \"AND\" array. Currently, nesting is limited to 3. For tag blocks (those with \"key\", \"value\", and \"negate\" keys), the following typing rules apply: 1. \"key\" isn't optional and must be a `string` 2. \"value\" isn't optional and can be `any` or list[`any`] 3. \"negate\" is optional and must be `true` or `false`. If present and `true`, then the filter block is negated in the resulting query. It is `false` by default.   When querying embeddings, you can optionally specify the `media_type` parameter in your request. By default (if not set), it is equal to \"TEXT\". This means that the query will be performed over files that have been parsed as text (for now, this covers all files except image files). If it is equal to \"IMAGE\", the query will be performed over image files (for now, `.jpg` and `.png` files). You can think of this field as an additional filter on top of any filters set in `file_ids` and   When `hybrid_search` is set to true, a combination of keyword search and semantic search are used to rank and select candidate embeddings during information retrieval. By default, these search methods are weighted equally during the ranking process. To adjust the weight (or \"importance\") of each search method, you can use the `hybrid_search_tuning_parameters` property. The description for the different tuning parameters are: - `weight_a`: weight to assign to semantic search - `weight_b`: weight to assign to keyword search  You must ensure that `sum(weight_a, weight_b,..., weight_n)` for all *n* weights is equal to 1. The equality has an error tolerance of 0.001 to account for possible floating point issues.  In order to use hybrid search for a customer across a set of documents, two flags need to be enabled: 1. Use the `/modify_user_configuration` endpoint to to enable `sparse_vectors` for the customer. The payload body for this request is below: ``` {   \"configuration_key_name\": \"sparse_vectors\",   \"value\": {     \"enabled\": true   } } ``` 2. Make sure hybrid search is enabled for the documents across which you want to perform the search. For the `/uploadfile` endpoint, this can be done by setting the following query parameter: `generate_sparse_vectors=true`   Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI's multimodal model; for text, we support OpenAI's `text-embedding-ada-002` and Cohere's embed-multilingual-v3.0. The model can be specified via the `embedding_model` parameter (in the POST body for `/embeddings`, and a query  parameter in `/uploadfile`). If no model is supplied, the `text-embedding-ada-002` is used by default. When performing embedding queries, embeddings from files that used the specified model will be considered in the query. For example, if files A and B have embeddings generated with `OPENAI`, and files C and D have embeddings generated with `COHERE_MULTILINGUAL_V3`, then by default, queries will only consider files A and B. If `COHERE_MULTILINGUAL_V3` is specified as the `embedding_model` in `/embeddings`, then only files C and D will be considered. Make sure that the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not** set `VERTEX_MULTIMODAL` as an `embedding_model`. This model is used automatically by Carbon when it detects an image file.
     - API Key:
       - type: apiKey authorization 
       - name: accessToken
     - API Key:
       - type: apiKey authorization 
       - name: apiKey
     - API Key:
       - type: apiKey customer-id 
       - name: customerId
     - parameter getEmbeddingDocumentsBody: (body)  
     - returns: RequestBuilder<DocumentResponseList> 
     */
    open func getDocumentsWithRequestBuilder(
            getEmbeddingDocumentsBody: GetEmbeddingDocumentsBody
    ) -> RequestBuilder<DocumentResponseList> {
        let basePath = self.client.basePath;
        let localVariablePath = "/embeddings"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: getEmbeddingDocumentsBody)

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: self.client.accessToken, prefix: "Token ")
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: self.client.apiKey, prefix: "Bearer ")
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "customer-id", value: self.client.customerId, prefix: nil)
            let localVariableRequestBuilder: RequestBuilder<DocumentResponseList>.Type = CarbonAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "POST", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to POST /embeddings")
    }


    /**
     Retrieve Embeddings And Content
     
     - parameter embeddingsAndChunksQueryInput: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getEmbeddingsAndChunksSync(embeddingsAndChunksQueryInput: EmbeddingsAndChunksQueryInput, apiResponseQueue: DispatchQueue = CarbonAPI.apiResponseQueue, completion: @escaping ((_ data: EmbeddingsAndChunksResponse?, _ error: Error?) -> Void)) -> RequestTask {
        return getEmbeddingsAndChunksWithRequestBuilder(embeddingsAndChunksQueryInput: embeddingsAndChunksQueryInput).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Retrieve Embeddings And Content
     
     - parameter embeddingsAndChunksQueryInput: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    private class func getEmbeddingsAndChunksAsyncMappedParams(embeddingsAndChunksQueryInput: EmbeddingsAndChunksQueryInput) async throws -> EmbeddingsAndChunksResponse {
        return try await withCheckedThrowingContinuation { continuation in
            getEmbeddingsAndChunksWithRequestBuilder(embeddingsAndChunksQueryInput: embeddingsAndChunksQueryInput).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }

    /**
     Retrieve Embeddings And Content
     
     - parameter embeddingsAndChunksQueryInput: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open class func getEmbeddingsAndChunks(
        filters: EmbeddingsAndChunksFilters,
        pagination: Pagination? = nil, 
        orderBy: EmbeddingsAndChunksOrderByColumns? = nil, 
        orderDir: OrderDir? = nil, 
        includeVectors: Bool? = nil
    ) async throws -> EmbeddingsAndChunksResponse {
        let embeddingsAndChunksQueryInput = EmbeddingsAndChunksQueryInput(
            pagination: pagination,
            orderBy: orderBy,
            orderDir: orderDir,
            filters: filters,
            includeVectors: includeVectors
        )
        return try await withCheckedThrowingContinuation { continuation in
            getEmbeddingsAndChunksWithRequestBuilder(embeddingsAndChunksQueryInput: embeddingsAndChunksQueryInput).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }


    /**
     Retrieve Embeddings And Content
     
     - parameter embeddingsAndChunksQueryInput: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open func getEmbeddingsAndChunks(
        filters: EmbeddingsAndChunksFilters,
        pagination: Pagination? = nil, 
        orderBy: EmbeddingsAndChunksOrderByColumns? = nil, 
        orderDir: OrderDir? = nil, 
        includeVectors: Bool? = nil
    ) async throws -> EmbeddingsAndChunksResponse {
        let embeddingsAndChunksQueryInput = EmbeddingsAndChunksQueryInput(
            pagination: pagination,
            orderBy: orderBy,
            orderDir: orderDir,
            filters: filters,
            includeVectors: includeVectors
        )
        return try await withCheckedThrowingContinuation { continuation in
            getEmbeddingsAndChunksWithRequestBuilder(embeddingsAndChunksQueryInput: embeddingsAndChunksQueryInput).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }



    /**
     Retrieve Embeddings And Content
     - POST /text_chunks
     - API Key:
       - type: apiKey authorization 
       - name: accessToken
     - API Key:
       - type: apiKey authorization 
       - name: apiKey
     - API Key:
       - type: apiKey customer-id 
       - name: customerId
     - parameter embeddingsAndChunksQueryInput: (body)  
     - returns: RequestBuilder<EmbeddingsAndChunksResponse> 
     */
    open class func getEmbeddingsAndChunksWithRequestBuilder(
            embeddingsAndChunksQueryInput: EmbeddingsAndChunksQueryInput
    ) -> RequestBuilder<EmbeddingsAndChunksResponse> {
        let basePath = CarbonAPI.basePath;
        let localVariablePath = "/text_chunks"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: embeddingsAndChunksQueryInput)

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: CarbonAPI.accessToken, prefix: "Token ")
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: CarbonAPI.apiKey, prefix: "Bearer ")
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "customer-id", value: CarbonAPI.customerId, prefix: nil)
            let localVariableRequestBuilder: RequestBuilder<EmbeddingsAndChunksResponse>.Type = CarbonAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "POST", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to POST /text_chunks")
    }

    /**
     Retrieve Embeddings And Content
     - POST /text_chunks
     - API Key:
       - type: apiKey authorization 
       - name: accessToken
     - API Key:
       - type: apiKey authorization 
       - name: apiKey
     - API Key:
       - type: apiKey customer-id 
       - name: customerId
     - parameter embeddingsAndChunksQueryInput: (body)  
     - returns: RequestBuilder<EmbeddingsAndChunksResponse> 
     */
    open func getEmbeddingsAndChunksWithRequestBuilder(
            embeddingsAndChunksQueryInput: EmbeddingsAndChunksQueryInput
    ) -> RequestBuilder<EmbeddingsAndChunksResponse> {
        let basePath = self.client.basePath;
        let localVariablePath = "/text_chunks"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: embeddingsAndChunksQueryInput)

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: self.client.accessToken, prefix: "Token ")
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: self.client.apiKey, prefix: "Bearer ")
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "customer-id", value: self.client.customerId, prefix: nil)
            let localVariableRequestBuilder: RequestBuilder<EmbeddingsAndChunksResponse>.Type = CarbonAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "POST", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to POST /text_chunks")
    }


    /**
     Upload Chunks And Embeddings
     
     - parameter chunksAndEmbeddingsUploadInput: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func uploadChunksAndEmbeddingsSync(chunksAndEmbeddingsUploadInput: ChunksAndEmbeddingsUploadInput, apiResponseQueue: DispatchQueue = CarbonAPI.apiResponseQueue, completion: @escaping ((_ data: GenericSuccessResponse?, _ error: Error?) -> Void)) -> RequestTask {
        return uploadChunksAndEmbeddingsWithRequestBuilder(chunksAndEmbeddingsUploadInput: chunksAndEmbeddingsUploadInput).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Upload Chunks And Embeddings
     
     - parameter chunksAndEmbeddingsUploadInput: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    private class func uploadChunksAndEmbeddingsAsyncMappedParams(chunksAndEmbeddingsUploadInput: ChunksAndEmbeddingsUploadInput) async throws -> GenericSuccessResponse {
        return try await withCheckedThrowingContinuation { continuation in
            uploadChunksAndEmbeddingsWithRequestBuilder(chunksAndEmbeddingsUploadInput: chunksAndEmbeddingsUploadInput).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }

    /**
     Upload Chunks And Embeddings
     
     - parameter chunksAndEmbeddingsUploadInput: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open class func uploadChunksAndEmbeddings(
        embeddingModel: EmbeddingGenerators,
        chunksAndEmbeddings: [SingleChunksAndEmbeddingsUploadInput],
        overwriteExisting: Bool? = nil, 
        chunksOnly: Bool? = nil, 
        customCredentials: AnyCodable? = nil
    ) async throws -> GenericSuccessResponse {
        let chunksAndEmbeddingsUploadInput = ChunksAndEmbeddingsUploadInput(
            embeddingModel: embeddingModel,
            chunksAndEmbeddings: chunksAndEmbeddings,
            overwriteExisting: overwriteExisting,
            chunksOnly: chunksOnly,
            customCredentials: customCredentials
        )
        return try await withCheckedThrowingContinuation { continuation in
            uploadChunksAndEmbeddingsWithRequestBuilder(chunksAndEmbeddingsUploadInput: chunksAndEmbeddingsUploadInput).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }


    /**
     Upload Chunks And Embeddings
     
     - parameter chunksAndEmbeddingsUploadInput: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open func uploadChunksAndEmbeddings(
        embeddingModel: EmbeddingGenerators,
        chunksAndEmbeddings: [SingleChunksAndEmbeddingsUploadInput],
        overwriteExisting: Bool? = nil, 
        chunksOnly: Bool? = nil, 
        customCredentials: AnyCodable? = nil
    ) async throws -> GenericSuccessResponse {
        let chunksAndEmbeddingsUploadInput = ChunksAndEmbeddingsUploadInput(
            embeddingModel: embeddingModel,
            chunksAndEmbeddings: chunksAndEmbeddings,
            overwriteExisting: overwriteExisting,
            chunksOnly: chunksOnly,
            customCredentials: customCredentials
        )
        return try await withCheckedThrowingContinuation { continuation in
            uploadChunksAndEmbeddingsWithRequestBuilder(chunksAndEmbeddingsUploadInput: chunksAndEmbeddingsUploadInput).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }



    /**
     Upload Chunks And Embeddings
     - POST /upload_chunks_and_embeddings
     - API Key:
       - type: apiKey authorization 
       - name: accessToken
     - API Key:
       - type: apiKey authorization 
       - name: apiKey
     - API Key:
       - type: apiKey customer-id 
       - name: customerId
     - parameter chunksAndEmbeddingsUploadInput: (body)  
     - returns: RequestBuilder<GenericSuccessResponse> 
     */
    open class func uploadChunksAndEmbeddingsWithRequestBuilder(
            chunksAndEmbeddingsUploadInput: ChunksAndEmbeddingsUploadInput
    ) -> RequestBuilder<GenericSuccessResponse> {
        let basePath = CarbonAPI.basePath;
        let localVariablePath = "/upload_chunks_and_embeddings"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: chunksAndEmbeddingsUploadInput)

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: CarbonAPI.accessToken, prefix: "Token ")
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: CarbonAPI.apiKey, prefix: "Bearer ")
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "customer-id", value: CarbonAPI.customerId, prefix: nil)
            let localVariableRequestBuilder: RequestBuilder<GenericSuccessResponse>.Type = CarbonAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "POST", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to POST /upload_chunks_and_embeddings")
    }

    /**
     Upload Chunks And Embeddings
     - POST /upload_chunks_and_embeddings
     - API Key:
       - type: apiKey authorization 
       - name: accessToken
     - API Key:
       - type: apiKey authorization 
       - name: apiKey
     - API Key:
       - type: apiKey customer-id 
       - name: customerId
     - parameter chunksAndEmbeddingsUploadInput: (body)  
     - returns: RequestBuilder<GenericSuccessResponse> 
     */
    open func uploadChunksAndEmbeddingsWithRequestBuilder(
            chunksAndEmbeddingsUploadInput: ChunksAndEmbeddingsUploadInput
    ) -> RequestBuilder<GenericSuccessResponse> {
        let basePath = self.client.basePath;
        let localVariablePath = "/upload_chunks_and_embeddings"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: chunksAndEmbeddingsUploadInput)

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: self.client.accessToken, prefix: "Token ")
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: self.client.apiKey, prefix: "Bearer ")
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "customer-id", value: self.client.customerId, prefix: nil)
            let localVariableRequestBuilder: RequestBuilder<GenericSuccessResponse>.Type = CarbonAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "POST", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to POST /upload_chunks_and_embeddings")
    }

}