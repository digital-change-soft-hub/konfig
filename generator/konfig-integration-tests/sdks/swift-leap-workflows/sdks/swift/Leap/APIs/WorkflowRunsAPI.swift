//
// WorkflowRunsAPI.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class WorkflowRunsAPI {

    weak var client: LeapClient?

    public init(client: LeapClient) {
        self.client = client
    }

    /**
     Get a workflow run
     
     - parameter workflowRunId: (path) The ID of the workflow run to retrieve. 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getWorkflowRunSync(workflowRunId: String, apiResponseQueue: DispatchQueue = LeapAPI.apiResponseQueue, completion: @escaping ((_ data: WorkflowRunSchema?, _ error: Error?) -> Void)) -> RequestTask {
        return getWorkflowRunWithRequestBuilder(workflowRunId: workflowRunId).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get a workflow run
     
     - parameter workflowRunId: (path) The ID of the workflow run to retrieve. 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    private class func getWorkflowRunAsyncMappedParams(workflowRunId: String) async throws -> WorkflowRunSchema {
        return try await withCheckedThrowingContinuation { continuation in
            getWorkflowRunWithRequestBuilder(workflowRunId: workflowRunId).execute { result in
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
     Get a workflow run
     
     - parameter workflowRunId: (path) The ID of the workflow run to retrieve. 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open class func getWorkflowRun(
        workflowRunId: String
    ) async throws -> WorkflowRunSchema {
        return try await withCheckedThrowingContinuation { continuation in
            getWorkflowRunWithRequestBuilder(workflowRunId: workflowRunId).execute { result in
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
     Get a workflow run
     
     - parameter workflowRunId: (path) The ID of the workflow run to retrieve. 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open func getWorkflowRun(
        workflowRunId: String
    ) async throws -> WorkflowRunSchema {
        return try await withCheckedThrowingContinuation { continuation in
            getWorkflowRunWithRequestBuilder(workflowRunId: workflowRunId).execute { result in
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
     Get a workflow run
     - GET /v1/runs/{workflow_run_id}
     - This endpoint retrieves the details of a specific workflow run using its `workflow_run_id`.
     - API Key:
       - type: apiKey X-Api-Key 
       - name: api_key
     - parameter workflowRunId: (path) The ID of the workflow run to retrieve. 
     - returns: RequestBuilder<WorkflowRunSchema> 
     */
    open class func getWorkflowRunWithRequestBuilder(
            workflowRunId: String
    ) -> RequestBuilder<WorkflowRunSchema> {
        let basePath = LeapAPI.basePath;
        var localVariablePath = "/v1/runs/{workflow_run_id}"
        let workflowRunIdPreEscape = "\(APIHelper.mapValueToPathItem(workflowRunId))"
        let workflowRunIdPostEscape = workflowRunIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{workflow_run_id}", with: workflowRunIdPostEscape, options: .literal, range: nil)
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "X-Api-Key", value: LeapAPI.apiKey, prefix: nil)
            let localVariableRequestBuilder: RequestBuilder<WorkflowRunSchema>.Type = LeapAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "GET", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to GET /v1/runs/{workflow_run_id}")
    }

    /**
     Get a workflow run
     - GET /v1/runs/{workflow_run_id}
     - This endpoint retrieves the details of a specific workflow run using its `workflow_run_id`.
     - API Key:
       - type: apiKey X-Api-Key 
       - name: api_key
     - parameter workflowRunId: (path) The ID of the workflow run to retrieve. 
     - returns: RequestBuilder<WorkflowRunSchema> 
     */
    open func getWorkflowRunWithRequestBuilder(
            workflowRunId: String
    ) -> RequestBuilder<WorkflowRunSchema> {
        let basePath = self.client!.basePath;
        var localVariablePath = "/v1/runs/{workflow_run_id}"
        let workflowRunIdPreEscape = "\(APIHelper.mapValueToPathItem(workflowRunId))"
        let workflowRunIdPostEscape = workflowRunIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{workflow_run_id}", with: workflowRunIdPostEscape, options: .literal, range: nil)
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "X-Api-Key", value: self.client!.apiKey, prefix: nil)
            let localVariableRequestBuilder: RequestBuilder<WorkflowRunSchema>.Type = LeapAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "GET", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to GET /v1/runs/{workflow_run_id}")
    }


    /**
     Run a workflow
     
     - parameter runWorkflowSchema: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func workflowSync(runWorkflowSchema: RunWorkflowSchema, apiResponseQueue: DispatchQueue = LeapAPI.apiResponseQueue, completion: @escaping ((_ data: WorkflowRunSchema?, _ error: Error?) -> Void)) -> RequestTask {
        return workflowWithRequestBuilder(runWorkflowSchema: runWorkflowSchema).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Run a workflow
     
     - parameter runWorkflowSchema: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    private class func workflowAsyncMappedParams(runWorkflowSchema: RunWorkflowSchema) async throws -> WorkflowRunSchema {
        return try await withCheckedThrowingContinuation { continuation in
            workflowWithRequestBuilder(runWorkflowSchema: runWorkflowSchema).execute { result in
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
     Run a workflow
     
     - parameter runWorkflowSchema: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open class func workflow(
        workflowId: String,
        webhookUrl: String? = nil, 
        input: [String: AnyCodable]? = nil
    ) async throws -> WorkflowRunSchema {
        let runWorkflowSchema = RunWorkflowSchema(
            workflowId: workflowId,
            webhookUrl: webhookUrl,
            input: input
        )
        return try await withCheckedThrowingContinuation { continuation in
            workflowWithRequestBuilder(runWorkflowSchema: runWorkflowSchema).execute { result in
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
     Run a workflow
     
     - parameter runWorkflowSchema: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open func workflow(
        workflowId: String,
        webhookUrl: String? = nil, 
        input: [String: AnyCodable]? = nil
    ) async throws -> WorkflowRunSchema {
        let runWorkflowSchema = RunWorkflowSchema(
            workflowId: workflowId,
            webhookUrl: webhookUrl,
            input: input
        )
        return try await withCheckedThrowingContinuation { continuation in
            workflowWithRequestBuilder(runWorkflowSchema: runWorkflowSchema).execute { result in
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
     Run a workflow
     - POST /v1/runs
     - This endpoint lets the user run a specified workflow with the provided workflow definition.
     - API Key:
       - type: apiKey X-Api-Key 
       - name: api_key
     - parameter runWorkflowSchema: (body)  
     - returns: RequestBuilder<WorkflowRunSchema> 
     */
    open class func workflowWithRequestBuilder(
            runWorkflowSchema: RunWorkflowSchema
    ) -> RequestBuilder<WorkflowRunSchema> {
        let basePath = LeapAPI.basePath;
        let localVariablePath = "/v1/runs"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: runWorkflowSchema)

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "X-Api-Key", value: LeapAPI.apiKey, prefix: nil)
            let localVariableRequestBuilder: RequestBuilder<WorkflowRunSchema>.Type = LeapAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "POST", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to POST /v1/runs")
    }

    /**
     Run a workflow
     - POST /v1/runs
     - This endpoint lets the user run a specified workflow with the provided workflow definition.
     - API Key:
       - type: apiKey X-Api-Key 
       - name: api_key
     - parameter runWorkflowSchema: (body)  
     - returns: RequestBuilder<WorkflowRunSchema> 
     */
    open func workflowWithRequestBuilder(
            runWorkflowSchema: RunWorkflowSchema
    ) -> RequestBuilder<WorkflowRunSchema> {
        let basePath = self.client!.basePath;
        let localVariablePath = "/v1/runs"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: runWorkflowSchema)

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "X-Api-Key", value: self.client!.apiKey, prefix: nil)
            let localVariableRequestBuilder: RequestBuilder<WorkflowRunSchema>.Type = LeapAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "POST", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to POST /v1/runs")
    }

}
