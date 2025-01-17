/*
NewsCatcher-V3 Production API

<img src='https://uploads-ssl.webflow.com/6429857b17973b636c2195c5/646c6f1eb774ff2f2997bec5_newscatcher_.svg' width='286' height='35' /> <br>  <br>Visit our website  <a href='https://newscatcherapi.com'>https://newscatcherapi.com</a>

The version of the OpenAPI document: 3.2.16
Contact: maksym@newscatcherapi.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Latest headlines request DTO.
 * @export
 * @interface LatestHeadlinesRequest
 */
export interface LatestHeadlinesRequest {
    /**
     * 
     * @type {string}
     * @memberof LatestHeadlinesRequest
     */
    'when'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LatestHeadlinesRequest
     */
    'by_parse_date'?: boolean;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'lang'?: any;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'not_lang'?: any;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'countries'?: any;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'not_countries'?: any;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'sources'?: any;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'predefined_sources'?: any;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'not_sources'?: any;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'not_author_name'?: any;
    /**
     * 
     * @type {string}
     * @memberof LatestHeadlinesRequest
     */
    'ranked_only'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LatestHeadlinesRequest
     */
    'is_headline'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LatestHeadlinesRequest
     */
    'is_paid_content'?: boolean;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'parent_url'?: any;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'all_links'?: any;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'all_domain_links'?: any;
    /**
     * 
     * @type {number}
     * @memberof LatestHeadlinesRequest
     */
    'word_count_min'?: number;
    /**
     * 
     * @type {number}
     * @memberof LatestHeadlinesRequest
     */
    'word_count_max'?: number;
    /**
     * 
     * @type {number}
     * @memberof LatestHeadlinesRequest
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof LatestHeadlinesRequest
     */
    'page_size'?: number;
    /**
     * 
     * @type {string}
     * @memberof LatestHeadlinesRequest
     */
    'clustering_variable'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LatestHeadlinesRequest
     */
    'clustering_enabled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LatestHeadlinesRequest
     */
    'clustering_threshold'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LatestHeadlinesRequest
     */
    'include_nlp_data'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LatestHeadlinesRequest
     */
    'has_nlp'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LatestHeadlinesRequest
     */
    'theme'?: string;
    /**
     * 
     * @type {string}
     * @memberof LatestHeadlinesRequest
     */
    'not_theme'?: string;
    /**
     * 
     * @type {string}
     * @memberof LatestHeadlinesRequest
     */
    'ORG_entity_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof LatestHeadlinesRequest
     */
    'PER_entity_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof LatestHeadlinesRequest
     */
    'LOC_entity_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof LatestHeadlinesRequest
     */
    'MISC_entity_name'?: string;
    /**
     * 
     * @type {number}
     * @memberof LatestHeadlinesRequest
     */
    'title_sentiment_min'?: number;
    /**
     * 
     * @type {number}
     * @memberof LatestHeadlinesRequest
     */
    'title_sentiment_max'?: number;
    /**
     * 
     * @type {number}
     * @memberof LatestHeadlinesRequest
     */
    'content_sentiment_min'?: number;
    /**
     * 
     * @type {number}
     * @memberof LatestHeadlinesRequest
     */
    'content_sentiment_max'?: number;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'iptc_tags'?: any;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'not_iptc_tags'?: any;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'iab_tags'?: any;
    /**
     * 
     * @type {any}
     * @memberof LatestHeadlinesRequest
     */
    'not_iab_tags'?: any;
}

