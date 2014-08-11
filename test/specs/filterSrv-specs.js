/*! grafana - v1.7.0 - 2014-08-12
 * Copyright (c) 2014 Torkel Ödegaard; Licensed Apache License */

define(["mocks/dashboard-mock","lodash","services/filterSrv"],function(a,b){describe("filterSrv",function(){var c,d;beforeEach(module("grafana.services")),beforeEach(module(function(){d=a.create()})),beforeEach(inject(function(a){c=a})),beforeEach(function(){c.init(d)}),describe("init",function(){beforeEach(function(){c.addTemplateParameter({name:"test",current:{value:"oogle"}})}),it("should initialize template data",function(){var a=c.applyTemplateToTarget("this.[[test]].filters");expect(a).to.be("this.oogle.filters")})}),describe("updateTemplateData",function(){beforeEach(function(){c.addTemplateParameter({name:"test",value:"muuu",current:{value:"muuuu"}}),c.updateTemplateData()}),it("should set current value and update template data",function(){var a=c.applyTemplateToTarget("this.[[test]].filters");expect(a).to.be("this.muuuu.filters")})}),describe("timeRange",function(){it("should return unparsed when parse is false",function(){c.setTime({from:"now",to:"now-1h"});var a=c.timeRange(!1);expect(a.from).to.be("now"),expect(a.to).to.be("now-1h")}),it("should return parsed when parse is true",function(){c.setTime({from:"now",to:"now-1h"});var a=c.timeRange(!0);expect(b.isDate(a.from)).to.be(!0),expect(b.isDate(a.to)).to.be(!0)})}),describe("setTime",function(){it("should return disable refresh for absolute times",function(){d.refresh=!0,c.setTime({from:"2011-01-01",to:"2015-01-01"}),expect(d.refresh).to.be(!1)}),it("should restore refresh after relative time range is set",function(){d.refresh=!0,c.setTime({from:"2011-01-01",to:"2015-01-01"}),expect(d.refresh).to.be(!1),c.setTime({from:"2011-01-01",to:"now"}),expect(d.refresh).to.be(!0)})})})});