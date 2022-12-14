import { it, describe, assertEquals } from '../deps.ts'
import { prefixes } from '../helpers/prefixes.ts'
import { Context } from './Context.ts'

describe('Context', () => {
  it('converts compacts iris', () => {

    /** @ts-ignore */
    prefixes['@vocab'] = prefixes.dbo

    const context = new Context(prefixes)
    const typeCompacted = context.compactIri('http://www.w3.org/1999/02/22-rdf-syntax-ns#type')
    const typeCompacted2 = context.compactIri('http://www.w3.org/1999/02/22-rdf-syntax-ns#type', true)

    assertEquals(typeCompacted, 'type')
    assertEquals(typeCompacted2, 'type')

    const vocabPredicate = context.compactIri('http://dbpedia.org/ontology/Person')
    assertEquals(vocabPredicate, 'dbo:Person')

    const vocabPredicate2 = context.compactIri('http://dbpedia.org/ontology/Person', true)
    assertEquals(vocabPredicate2, 'Person')


  })
})