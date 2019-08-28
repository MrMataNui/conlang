Feature: Conlang

Scenario: grammar page
    Given you navigate to the grammar page
    Then it should show the word order
			And it should show personal pronouns
			And it should show Verbs

Scenario: morphology page
    Given you navigate to the morphology page
    Then it should show noun morphology
			And it should derivational morphology

Scenario: grammar-misc page
    Given you navigate to the grammar-misc page
    Then it should show perfect and progressive aspects
			And it should derivational show imperative
			And it should derivational show negation

Scenario: articles page
    Given you navigate to the articles page
    Then it should show definite articles
