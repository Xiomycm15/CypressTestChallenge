Feature: Visit Details Page
@GM @AA

    Scenario Outline:'ASuccessful Purchase Of A Property  '
    Given the user logins with valid credentials
    When ther user submits application for multiple customers with "<propertyCode>" property code
    And the user fills all of the mandatory fields
    And there are "<childrenQuantity>" occupants under the age of 18
    And "<vehicleQuantity>" vehicles will be kept at the property
    And "<petsQuantity>" pets will be kept at the property
    And the user complete purchase with valid payment details
    Then the purchase should be successfully completed
    Examples:
    | propertyCode | childrenQuantity | vehicleQuantity | petsQuantity |
    | 12871        | 2                | 2               |        3     |


