"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[827],{3827:(h,o,i)=>{i.r(o),i.d(o,{default:()=>f});var a=i(482),d=i(4755),x=i(1728),m=i(7579),r=i(2342),t=i(2223),u=i(2480),g=i(8365);function v(n,l){if(1&n&&(t.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12),t._uU(5,"Total de Envios:"),t.qZA()(),t.TgZ(6,"div",13)(7,"div",14),t._uU(8),t.qZA(),t.TgZ(9,"div",15),t._uU(10,"Enviados"),t.qZA()()(),t.TgZ(11,"div",10)(12,"div",11)(13,"div",12),t._uU(14,"WebPush:"),t.qZA()(),t.TgZ(15,"div",13)(16,"div",16),t._uU(17),t.qZA(),t.TgZ(18,"div",17),t._uU(19,"Enviados"),t.qZA()()(),t.TgZ(20,"div",10)(21,"div",11)(22,"div",12),t._uU(23,"E-mail:"),t.qZA()(),t.TgZ(24,"div",13)(25,"div",18),t._uU(26),t.qZA(),t.TgZ(27,"div",19),t._uU(28,"Enviados"),t.qZA()()(),t.TgZ(29,"div",10)(30,"div",11)(31,"div",12),t._uU(32,"SMS:"),t.qZA()(),t.TgZ(33,"div",13)(34,"div",20),t._uU(35),t.qZA(),t.TgZ(36,"div",21),t._uU(37,"Enviados"),t.qZA()()()()()),2&n){const e=t.oxw();t.xp6(8),t.Oqu(e.totalEnviado),t.xp6(9),t.Oqu(e.totalWebPush),t.xp6(9),t.Oqu(e.totalEmail),t.xp6(9),t.Oqu(e.totalSms)}}const f=[{path:"",component:(()=>{class n{constructor(e,s,c){this._activatedRoute=e,this._notService=s,this._changeDetectorRef=c,this.totalEnviado=0,this.totalWebPush=0,this.totalEmail=0,this.totalSms=0,this._unsubscribeAll=new m.x}ngOnInit(){this.user=this._activatedRoute.snapshot.data.user,this._notService.get(this.user.id).subscribe({next:e=>{this.totalEnviado=e.length,this.totalWebPush=e.filter(s=>"webpush"==s.type).length,this.totalEmail=e.filter(s=>"email"==s.type).length,this.totalSms=e.filter(s=>"sms"==s.type).length,this._changeDetectorRef.markForCheck()}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.gz),t.Y36(g.f),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["dashboards"]],standalone:!0,features:[t.jDz],decls:10,vars:2,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],["class","flex-auto p-6 sm:p-10",4,"ngIf"],[1,"flex-auto","p-6","sm:p-10"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-4","gap-6","w-full","min-w-0"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-start","justify-between"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"flex","flex-col","items-center","mt-2"],[1,"text-7xl","sm:text-8xl","font-bold","tracking-tight","leading-none","text-blue-500"],[1,"text-lg","font-medium","text-blue-600","dark:text-blue-500"],[1,"text-7xl","sm:text-8xl","font-bold","tracking-tight","leading-none","text-red-500"],[1,"text-lg","font-medium","text-red-600","dark:text-red-500"],[1,"text-7xl","sm:text-8xl","font-bold","tracking-tight","leading-none","text-amber-500"],[1,"text-lg","font-medium","text-amber-600","dark:text-amber-500"],[1,"text-7xl","sm:text-8xl","font-bold","tracking-tight","leading-none","text-green-500"],[1,"text-lg","font-medium","text-green-600","dark:text-green-500"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t.ynx(6),t.TgZ(7,"div",6),t._uU(8),t.qZA(),t.BQk(),t.qZA()()()()(),t.YNc(9,v,38,4,"div",7),t.qZA()),2&e&&(t.xp6(8),t.hij("Bem-Vindo ",s.user.name,"!"),t.xp6(1),t.Q6J("ngIf",!0))},dependencies:[d.ez,d.O5,x.ot,r.ZX],encapsulation:2}),n})(),resolve:{initialData:a.D,user:a.O}}]}}]);