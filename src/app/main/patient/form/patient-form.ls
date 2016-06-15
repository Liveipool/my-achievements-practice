'use strict'
GFC.Widget.create 'edit', { # 如何安排增删改？
  module:
    name: 'app.patient', 
    submit: !-> console.log "submit form"
    
  service:
    name: 'aPatient'
    data: 'patient/patients.json'
    query: id: '@id'
}
