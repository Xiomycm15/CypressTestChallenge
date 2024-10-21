Feature: Techincal test tenantev
@GM @AA

    Scenario Outline: A Successful Purchase Of A Property with code "<propertyCode>"   
    Given the user logins with valid credentials
    When ther user submits application for multiple customers with "<propertyCode>" property code
    And the user fills all of the mandatory fields for code "<propertyCode>"
    And there are "<childrenQuantity>" occupants under the age of 18
    And "<vehicleQuantity>" vehicles will be kept at the property
    And "<petsQuantity>" pets will be kept at the property for code "<propertyCode>"
    And the user complete purchase with valid payment details
    Then the purchase should be successfully completed
    Examples:
    | propertyCode | childrenQuantity | vehicleQuantity | petsQuantity |
    | 12871        | 2                | 1               |        2     |
    | 12850        | 0                | 2               |        3     |

