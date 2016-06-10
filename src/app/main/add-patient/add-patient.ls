'use strict'
new GFC-Page {
  module:
    name: 'app.add-patient', controller: ($scope, data)!->
      console.log "patients: ", data = data.data
      patient = data[Math.floor Math.random! * data.length]
      @ <<< patient{姓名, 性别, 年龄, 民族, 出生地}
      @submit = -> console.log "submit form"

  menu:
    title : '添加病患' 
    image : '/assets/images/menu/test-plan.svg'

  service:
    name: 'patients'
    data: 'patient/patients.json'
}
