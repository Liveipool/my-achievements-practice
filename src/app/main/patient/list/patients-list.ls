'use strict'
GFC.Widget.create 'list', { 
  module:
    name: 'app.patients', 
    schema: "广州.中山大学附属第六医院.病患"
    template-url: 'app/main/patient/list/ui.gfc.html'
    item-state: 'app.patient'

  menu:
    title : '病患列表' 
    image : '/assets/images/menu/test-plan.svg'
}
