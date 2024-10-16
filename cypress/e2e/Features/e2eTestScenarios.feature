Feature: Visit Details Page
@GM @AA

    Scenario Outline:'ASuccessful Purchase Of A Property  '
    Given the user logins with valid credentials
    And the user starts a new application with following code "<propertyCode>"
    Examples:
    | propertyCode |
    | 12871 |


