'use strict'
GFC.Widget.create 'list', { 
  module:
    name: 'app.patients', 
    template-url: 'app/main/patient/list/ui.gfc.html'
    click-row: (state, data)-> 
      console.log "click-row form"
      state.go 'app.patient', id: data[0]

  menu:
    title: '病患列表' 
    image: '/assets/images/menu/test-plan.svg'
    group: 'example'

  service:
    name: 'patients'
    data: 'patient/patients.json'
}
