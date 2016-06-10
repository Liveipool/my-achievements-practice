'use strict'
new GFC-Page {
  module:
    name: 'app.add-doctor'
    template-url: '/app/main/add-doctor/ui.gfc.html' 
    controller: ($scope, data)!->
      console.log "doctors: ", data = data.data
      doctor = data[Math.floor Math.random! * data.length]
      @ <<< doctor{姓名, 性别, 年龄, 民族, 出生地}
      @submit = -> console.log "submit form"

  menu:
    group : 'example'
    title : '添加医生' 
    image : '/assets/images/menu/test-plan.svg'

  service: name: 'patients' # 复用已有service
}
