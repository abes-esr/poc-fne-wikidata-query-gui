var wikibase = wikibase || {};
wikibase.queryService = wikibase.queryService || {};
wikibase.queryService.RdfNamespaces = {};

( function ( $, RdfNamespaces ) {
	'use strict';

	RdfNamespaces.NAMESPACE_SHORTCUTS = {
    FNE: {
			fne: 'https://poc-fne.abes.fr/entity/',
			fnet: 'https://poc-fne.abes.fr/prop/direct/',
			fnetn: 'https://poc-fne.abes.fr/prop/direct-normalized/',
			fnes: 'https://poc-fne.abes.fr/entity/statement/',
			p: 'https://poc-fne.abes.fr/prop/',
			fneref: 'https://poc-fne.abes.fr/reference/',
			fnev: 'https://poc-fne.abes.fr/value/',
			ps: 'http://www.wikidata.org/prop/statement/',
			psv: 'http://www.wikidata.org/prop/statement/value/',
			psn: 'http://www.wikidata.org/prop/statement/value-normalized/',
			pq: 'http://www.wikidata.org/prop/qualifier/',
			pqv: 'http://www.wikidata.org/prop/qualifier/value/',
			pqn: 'http://www.wikidata.org/prop/qualifier/value-normalized/',
			pr: 'http://www.wikidata.org/prop/reference/',
			prv: 'http://www.wikidata.org/prop/reference/value/',
			prn: 'http://www.wikidata.org/prop/reference/value-normalized/',
			fnedata: 'https://poc-fne.abes.fr/wiki/Special:EntityData/'
    },
		Wikidata: {
			wikibase: 'http://wikiba.se/ontology#',
			wd: 'http://www.wikidata.org/entity/',
			wdt: 'http://www.wikidata.org/prop/direct/',
			wdtn: 'http://www.wikidata.org/prop/direct-normalized/',
			wds: 'http://www.wikidata.org/entity/statement/',
			wdp: 'http://www.wikidata.org/prop/',
			wdref: 'http://www.wikidata.org/reference/',
			wdv: 'http://www.wikidata.org/value/',
			wdps: 'http://www.wikidata.org/prop/statement/',
			wdpsv: 'http://www.wikidata.org/prop/statement/value/',
			wdpq: 'http://www.wikidata.org/prop/qualifier/',
			wdpqv: 'http://www.wikidata.org/prop/qualifier/value/',
			wdpr: 'http://www.wikidata.org/prop/reference/',
			wdprv: 'http://www.wikidata.org/prop/reference/value/',
			wdno: 'http://www.wikidata.org/prop/novalue/',
			wdata: 'http://www.wikidata.org/wiki/Special:EntityData/'
		},
		W3C: {
			rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
			rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
			owl: 'http://www.w3.org/2002/07/owl#',
			skos: 'http://www.w3.org/2004/02/skos/core#',
			xsd: 'http://www.w3.org/2001/XMLSchema#',
			prov: 'http://www.w3.org/ns/prov#'
		},
		'Social/Other': {
			schema: 'http://schema.org/',
			geo: 'http://www.opengis.net/ont/geosparql#',
			geof: 'http://www.opengis.net/def/geosparql/function/'
		},
		Blazegraph: {
			bd: 'http://www.bigdata.com/rdf#',
			bds: 'http://www.bigdata.com/rdf/search#',
			gas: 'http://www.bigdata.com/rdf/gas#',
			hint: 'http://www.bigdata.com/queryHints#'
		}
	};

	RdfNamespaces.ENTITY_TYPES = {
		'https://poc-fne.abes.fr/prop/direct/': 'property',
		'https://poc-fne.abes.fr/prop/direct-normalized/': 'property',
		'https://poc-fne.abes.fr/prop/': 'property',
		'https://poc-fne.abes.fr/prop/novalue/': 'property',
		'https://poc-fne.abes.fr/prop/statement/': 'property',
		'https://poc-fne.abes.fr/prop/statement/value/': 'property',
		'https://poc-fne.abes.fr/prop/statement/value-normalized/': 'property',
		'https://poc-fne.abes.fr/prop/qualifier/': 'property',
		'https://poc-fne.abes.fr/prop/qualifier/value/': 'property',
		'https://poc-fne.abes.fr/prop/qualifier/value-normalized/': 'property',
		'https://poc-fne.abes.fr/prop/reference/': 'property',
		'https://poc-fne.abes.fr/prop/reference/value/': 'property',
		'https://poc-fne.abes.fr/prop/reference/value-normalized/': 'property',
		'https://poc-fne.abes.fr/wiki/Special:EntityData/': 'item',
		'https://poc-fne.abes.fr/entity/': 'item'
	};

	RdfNamespaces.ALL_PREFIXES = $.map( RdfNamespaces.NAMESPACE_SHORTCUTS, function ( n ) {
		return n;
	} ).reduce( function ( p, v, i ) {
		return $.extend( p, v );
	}, {} );

	RdfNamespaces.STANDARD_PREFIXES = {
		fne: 'PREFIX fne: <https://poc-fne.abes.fr/entity/>',
		fnet: 'PREFIX fnet: <https://poc-fne.abes.fr/prop/direct/>',
		wikibase: 'PREFIX wikibase: <http://wikiba.se/ontology#>',
		p: 'PREFIX p: <https://poc-fne.abes.fr/prop/>',
		ps: 'PREFIX ps: <https://poc-fne.abes.fr/prop/statement/>',
		pq: 'PREFIX pq: <https://poc-fne.abes.fr/prop/qualifier/>',
		rdfs: 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>',
		bd: 'PREFIX bd: <http://www.bigdata.com/rdf#>'
	};

	RdfNamespaces.getPrefixMap = function ( entityTypes ) {
		var prefixes = {};
		$.each( RdfNamespaces.ALL_PREFIXES, function ( prefix, url ) {
			if ( entityTypes[url] ) {
				prefixes[prefix] = entityTypes[url];
			}
		} );
		return prefixes;
	};

} )( jQuery, wikibase.queryService.RdfNamespaces );
