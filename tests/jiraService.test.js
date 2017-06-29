import { getJiraTicketKey } from '../js/iframe/jiraService';
import { expect } from 'chai';
import { JiraError } from '../js/iframe/jira-error';

describe("getJiraTicketKey", function() {
  it('should handle errors', function() {
    var payload = {
        "issues": [],
        "errors": [
            {
                "status": 400,
                "elementErrors": {
                    "errorMessages": ["Msg 1", "Msg 2"],
                    "errors": {
                        "issuelinks": "Field does not support update 'issuelinks'",
                        "key": "Not Supported"

                    }
                },
                "failedElementNumber": 0
            }
        ]
    };
    expect( function() { getJiraTicketKey(payload)}  ).to.throw(JiraError);

  });

  it('should handle bad payload', function() {
    var payload = {
    };
    expect( function() { getJiraTicketKey(payload)}  ).to.throw(JiraError);

  });

  it('should handle bad payload (2)', function() {
    var payload = {
      "errors": [
          {
              "status": 400,
              "failedElementNumber": 0
          }
      ]
    };
    expect( function() { getJiraTicketKey(payload)}  ).to.throw(JiraError);

  });

  it('should handle bad payload (3)', function() {
    var payload = {
        "issues": [],
        "errors": [
            {
                "status": 400,
                "elementErrors": {
                    "errors": []
                },
                "failedElementNumber": 0
            }
        ]
    };
    expect( function() { getJiraTicketKey(payload)}  ).to.throw(JiraError);

  });

  it('should handle passing case', function() {
    var payload = {
        "issues": [ { issue: { key: "AB-000"} }],
        "errors": []
    };
    expect( getJiraTicketKey(payload)  ).to.equal("AB-000");

  });

})
