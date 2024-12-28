import './polyfills.server.mjs';
import{a as K,b as J}from"./chunk-MBBWET6Z.mjs";import{$ as S,A as Pe,B as Te,C as ye,F as B,Fa as U,G as w,Ga as b,Ia as De,Na as ze,R,S as o,U as j,X as G,Y as v,Z as Be,_ as _e,aa as Ce,ab as Ye,b as Ne,ba as Re,ca as je,d as Oe,da as Ge,db as X,ea as Ue,f as Y,fa as l,g as xe,ga as u,ha as D,ia as He,ja as p,ka as Le,l as ke,ma as h,n as Z,o as C,pa as V,q as k,qa as N,r as E,sa as $e,t as g,ta as We,v as I,w as P,x as d,xa as qe,z as T}from"./chunk-LOAOCB3Z.mjs";import{a as c,b as f}from"./chunk-5XUXGTUW.mjs";var it=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(o(j),o(B))},e.\u0275dir=d({type:e});let t=e;return t})(),Nt=(()=>{let e=class e extends it{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=ye(e)))(s||e)}})(),e.\u0275dir=d({type:e,features:[v]});let t=e;return t})(),ue=new E("");var Ot={provide:ue,useExisting:C(()=>ce),multi:!0};function xt(){let t=De()?De().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var kt=new E(""),ce=(()=>{let e=class e extends it{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!xt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(o(j),o(B),o(kt,8))},e.\u0275dir=d({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&p("input",function(_){return s._handleInput(_.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(_){return s._compositionEnd(_.target.value)})},features:[V([Ot]),v]});let t=e;return t})();function A(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function nt(t){return t!=null&&typeof t.length=="number"}var de=new E(""),he=new E(""),Pt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,F=class{static min(e){return Tt(e)}static max(e){return Bt(e)}static required(e){return Rt(e)}static requiredTrue(e){return jt(e)}static email(e){return Gt(e)}static minLength(e){return Ut(e)}static maxLength(e){return Ht(e)}static pattern(e){return Lt(e)}static nullValidator(e){return rt(e)}static compose(e){return ct(e)}static composeAsync(e){return ht(e)}};function Tt(t){return e=>{if(A(e.value)||A(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function Bt(t){return e=>{if(A(e.value)||A(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function Rt(t){return A(t.value)?{required:!0}:null}function jt(t){return t.value===!0?null:{required:!0}}function Gt(t){return A(t.value)||Pt.test(t.value)?null:{email:!0}}function Ut(t){return e=>A(e.value)||!nt(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ht(t){return e=>nt(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Lt(t){if(!t)return rt;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(A(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function rt(t){return null}function st(t){return t!=null}function ot(t){return qe(t)?Oe(t):t}function at(t){let e={};return t.forEach(n=>{e=n!=null?c(c({},e),n):e}),Object.keys(e).length===0?null:e}function lt(t,e){return e.map(n=>n(t))}function $t(t){return!t.validate}function ut(t){return t.map(e=>$t(e)?e:n=>e.validate(n))}function ct(t){if(!t)return null;let e=t.filter(st);return e.length==0?null:function(n){return at(lt(n,e))}}function dt(t){return t!=null?ct(ut(t)):null}function ht(t){if(!t)return null;let e=t.filter(st);return e.length==0?null:function(n){let i=lt(n,e).map(ot);return xe(i).pipe(Y(at))}}function ft(t){return t!=null?ht(ut(t)):null}function Ze(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function pt(t){return t._rawValidators}function mt(t){return t._rawAsyncValidators}function Ve(t){return t?Array.isArray(t)?t:[t]:[]}function ee(t,e){return Array.isArray(t)?t.includes(e):t===e}function Xe(t,e){let n=Ve(e);return Ve(t).forEach(r=>{ee(n,r)||n.push(r)}),n}function Ke(t,e){return Ve(e).filter(n=>!ee(t,n))}var te=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=dt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ft(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},m=class extends te{get formDirective(){return null}get path(){return null}},q=class extends te{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ie=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Wt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ki=f(c({},Wt),{"[class.ng-submitted]":"isSubmitted"}),gt=(()=>{let e=class e extends ie{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(q,2))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&Ce("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[v]});let t=e;return t})(),vt=(()=>{let e=class e extends ie{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(m,10))},e.\u0275dir=d({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&Ce("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[v]});let t=e;return t})();var H="VALID",Q="INVALID",O="PENDING",L="DISABLED",M=class{},ne=class extends M{constructor(e,n){super(),this.value=e,this.source=n}},$=class extends M{constructor(e,n){super(),this.pristine=e,this.source=n}},W=class extends M{constructor(e,n){super(),this.touched=e,this.source=n}},x=class extends M{constructor(e,n){super(),this.status=e,this.source=n}},be=class extends M{constructor(e){super(),this.source=e}},Ae=class extends M{constructor(e){super(),this.source=e}};function Me(t){return(fe(t)?t.validators:t)||null}function qt(t){return Array.isArray(t)?dt(t):t||null}function Ee(t,e){return(fe(e)?e.asyncValidators:t)||null}function zt(t){return Array.isArray(t)?ft(t):t||null}function fe(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function yt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new Z(1e3,"");if(!i[n])throw new Z(1001,"")}function _t(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new Z(1002,"")})}var z=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=U(()=>this.statusReactive()),this.statusReactive=G(void 0),this._pristine=U(()=>this.pristineReactive()),this.pristineReactive=G(!0),this._touched=U(()=>this.touchedReactive()),this.touchedReactive=G(!1),this._events=new Ne,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return b(this.statusReactive)}set status(e){b(()=>this.statusReactive.set(e))}get valid(){return this.status===H}get invalid(){return this.status===Q}get pending(){return this.status==O}get disabled(){return this.status===L}get enabled(){return this.status!==L}get pristine(){return b(this.pristineReactive)}set pristine(e){b(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return b(this.touchedReactive)}set touched(e){b(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Xe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Xe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ke(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ke(e,this._rawAsyncValidators))}hasValidator(e){return ee(this._rawValidators,e)}hasAsyncValidator(e){return ee(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(f(c({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new W(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),n&&e.emitEvent!==!1&&this._events.next(new W(!1,i))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(f(c({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new $(!1,i))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),n&&e.emitEvent!==!1&&this._events.next(new $(!0,i))}markAsPending(e={}){this.status=O;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new x(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(f(c({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=L,this.errors=null,this._forEachChild(r=>{r.disable(f(c({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ne(this.value,i)),this._events.next(new x(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(c({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=H,this._forEachChild(i=>{i.enable(f(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(c({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===H||this.status===O)&&this._runAsyncValidator(i,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ne(this.value,n)),this._events.next(new x(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(f(c({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?L:H}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=O,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let i=ot(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new x(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,i)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?L:this.errors?Q:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(O)?O:this._anyControlsHaveStatus(Q)?Q:H}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new $(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new W(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){fe(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=qt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=zt(this._rawAsyncValidators)}},re=class extends z{constructor(e,n,i){super(Me(n),Ee(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){_t(this,!0,e),Object.keys(e).forEach(i=>{yt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,s)=>{i=n(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var we=new E("CallSetDisabledState",{providedIn:"root",factory:()=>pe}),pe="always";function Fe(t,e){return[...e.path,t]}function Je(t,e,n=pe){Ie(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Zt(t,e),Kt(t,e),Xt(t,e),Yt(t,e)}function Qe(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),oe(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function se(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Yt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Ie(t,e){let n=pt(t);e.validator!==null?t.setValidators(Ze(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=mt(t);e.asyncValidator!==null?t.setAsyncValidators(Ze(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();se(e._rawValidators,r),se(e._rawAsyncValidators,r)}function oe(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=pt(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=mt(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return se(e._rawValidators,i),se(e._rawAsyncValidators,i),n}function Zt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ct(t,e)})}function Xt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ct(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ct(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Kt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Jt(t,e){t==null,Ie(t,e)}function Qt(t,e){return oe(t,e)}function ei(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function ti(t){return Object.getPrototypeOf(t.constructor)===Nt}function ii(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ni(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===ce?n=s:ti(s)?i=s:r=s}),r||i||n||null}function ri(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function et(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function tt(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var y=class extends z{constructor(e=null,n,i){super(Me(n),Ee(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),fe(n)&&(n.nonNullable||n.initialValueIsDefault)&&(tt(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){et(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){et(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){tt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var si=t=>t instanceof y,oi=(()=>{let e=class e extends m{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return Fe(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=ye(e)))(s||e)}})(),e.\u0275dir=d({type:e,features:[v]});let t=e;return t})();var Dt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=d({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Vt=new E("");var ai={provide:m,useExisting:C(()=>me)},me=(()=>{let e=class e extends m{get submitted(){return b(this._submittedReactive)}set submitted(i){this._submittedReactive.set(i)}constructor(i,r,s){super(),this.callSetDisabledState=s,this._submitted=U(()=>this._submittedReactive()),this._submittedReactive=G(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new w,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(oe(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return Je(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Qe(i.control||null,i,!1),ri(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this._submittedReactive.set(!0),ii(this.form,this.directives),this.ngSubmit.emit(i),this.form._events.next(new be(this.control)),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this._submittedReactive.set(!1),this.form._events.next(new Ae(this.form))}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(Qe(r||null,i),si(s)&&(Je(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);Jt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Qt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Ie(this.form,this),this._oldForm&&oe(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(o(de,10),o(he,10),o(we,8))},e.\u0275dir=d({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&p("submit",function(_){return s.onSubmit(_)})("reset",function(){return s.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[V([ai]),v,T]});let t=e;return t})(),li={provide:m,useExisting:C(()=>bt)},bt=(()=>{let e=class e extends oi{constructor(i,r,s){super(),this.name=null,this._parent=i,this._setValidators(r),this._setAsyncValidators(s)}_checkParentType(){At(this._parent)}};e.\u0275fac=function(r){return new(r||e)(o(m,13),o(de,10),o(he,10))},e.\u0275dir=d({type:e,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},features:[V([li]),v]});let t=e;return t})(),ui={provide:m,useExisting:C(()=>ge)},ge=(()=>{let e=class e extends m{constructor(i,r,s){super(),this.name=null,this._parent=i,this._setValidators(r),this._setAsyncValidators(s)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return Fe(this.name==null?this.name:this.name.toString(),this._parent)}_checkParentType(){At(this._parent)}};e.\u0275fac=function(r){return new(r||e)(o(m,13),o(de,10),o(he,10))},e.\u0275dir=d({type:e,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},features:[V([ui]),v]});let t=e;return t})();function At(t){return!(t instanceof bt)&&!(t instanceof me)&&!(t instanceof ge)}var ci={provide:q,useExisting:C(()=>Se)},Se=(()=>{let e=class e extends q{set isDisabled(i){}constructor(i,r,s,a,_){super(),this._ngModelWarningConfig=_,this._added=!1,this.name=null,this.update=new w,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=ni(this,a)}ngOnChanges(i){this._added||this._setUpControl(),ei(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return Fe(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(m,13),o(de,10),o(he,10),o(ue,10),o(Vt,8))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[V([ci]),v,T]});let t=e;return t})();var Mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=k({});let t=e;return t})(),ae=class extends z{constructor(e,n,i){super(Me(n),Ee(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){_t(this,!1,e),e.forEach((i,r)=>{yt(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var Et=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:we,useValue:i.callSetDisabledState??pe}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=k({imports:[Mt]});let t=e;return t})(),wt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Vt,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:we,useValue:i.callSetDisabledState??pe}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=k({imports:[Mt]});let t=e;return t})();var Ft=(()=>{class t{constructor(n,i){this.renderer=n,this.elementRef=i,this.onInput=r=>{let s=r?new Date(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()):null,a=s?s.toISOString():null;this.onChange(a)},this.onChange=()=>{},this.onTouched=()=>{}}writeValue(n){let i=n?new Date(n):null,r=i?new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate())):null;this.renderer.setProperty(this.elementRef.nativeElement,"valueAsDate",r)}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",n)}}return t.\u0275fac=function(n){return new(n||t)(o(j),o(B))},t.\u0275dir=d({type:t,selectors:[["","useValueAsLocalIso",""]],hostBindings:function(n,i){n&1&&p("input",function(s){return i.onInput(s.target.valueAsDate)})("blur",function(){return i.onTouched()})},standalone:!0,features:[V([{provide:ue,useExisting:C(()=>t),multi:!0}])]}),t})();function hi(t,e){if(t&1&&D(0,"input",9),t&2){let n=e.$index;S("formControlName",n),_e("aria-label","Author "+n)}}var ve=(()=>{let e=class e{constructor(){this.submitBook=new w,this.form=new re({title:new y("",{nonNullable:!0,validators:F.required}),subtitle:new y("",{nonNullable:!0}),isbn:new y("",{nonNullable:!0,validators:[F.required,F.minLength(10),F.maxLength(13)]}),description:new y("",{nonNullable:!0}),published:new y("",{nonNullable:!0}),authors:this.buildAuthorsArray([""]),thumbnailUrl:new y("",{nonNullable:!0})})}ngOnChanges(){this.book?(this.setFormValues(this.book),this.setEditMode(!0)):this.setEditMode(!1)}setFormValues(i){this.form.patchValue(i),this.form.setControl("authors",this.buildAuthorsArray(i.authors))}setEditMode(i){let r=this.form.controls.isbn;i?r.disable():r.enable()}buildAuthorsArray(i){return new ae(i.map(r=>new y(r,{nonNullable:!0})))}get authors(){return this.form.controls.authors}addAuthorControl(){this.authors.push(new y("",{nonNullable:!0}))}submitForm(){let i=this.form.getRawValue(),r=i.authors.filter(a=>!!a),s=f(c({},i),{authors:r});this.submitBook.emit(s)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=I({type:e,selectors:[["bm-book-form"]],inputs:{book:"book"},outputs:{submitBook:"submitBook"},standalone:!0,features:[T,N],decls:28,vars:2,consts:[[3,"ngSubmit","formGroup"],["for","title"],["id","title","formControlName","title"],["for","subtitle"],["id","subtitle","formControlName","subtitle"],["for","isbn"],["id","isbn","formControlName","isbn"],["type","button",1,"add",3,"click"],["formArrayName","authors"],[3,"formControlName"],["for","description"],["id","description","formControlName","description"],["for","published"],["type","date","useValueAsLocalIso","","id","published","formControlName","published"],["for","thumbnailUrl"],["type","url","id","thumbnailUrl","formControlName","thumbnailUrl"],["type","submit",3,"disabled"]],template:function(r,s){r&1&&(l(0,"form",0),p("ngSubmit",function(){return s.submitForm()}),l(1,"label",1),h(2,"Title"),u(),D(3,"input",2),l(4,"label",3),h(5,"Subtitle"),u(),D(6,"input",4),l(7,"label",5),h(8,"ISBN"),u(),D(9,"input",6),l(10,"label"),h(11,"Authors"),u(),l(12,"button",7),p("click",function(){return s.addAuthorControl()}),h(13,"+ Author"),u(),l(14,"fieldset",8),Ge(15,hi,1,2,"input",9,je),u(),l(17,"label",10),h(18,"Description"),u(),D(19,"textarea",11),l(20,"label",12),h(21,"Published"),u(),D(22,"input",13),l(23,"label",14),h(24,"Thumbnail URL"),u(),D(25,"input",15),l(26,"button",16),h(27,"Save"),u()()),r&2&&(S("formGroup",s.form),R(15),Ue(s.authors.controls),R(11),S("disabled",s.form.invalid))},dependencies:[Et,Dt,ce,gt,vt,wt,me,Se,ge,Ft]});let t=e;return t})();var It=(()=>{let e=class e{constructor(){this.store=g(J),this.service=g(K),this.router=g(X)}create(i){this.service.create(i).subscribe(r=>{this.store.load(),this.router.navigate(["/books",r.isbn])})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=I({type:e,selectors:[["bm-book-create"]],standalone:!0,features:[N],decls:3,vars:0,consts:[[3,"submitBook"]],template:function(r,s){r&1&&(l(0,"h1"),h(1,"Create Book"),u(),l(2,"bm-book-form",0),p("submitBook",function(_){return s.create(_)}),u())},dependencies:[ve]});let t=e;return t})();function fi(t,e){if(t&1){let n=He();l(0,"bm-book-form",1),p("submitBook",function(r){Pe(n);let s=Le();return Te(s.update(r))}),u()}t&2&&S("book",e)}var St=(()=>{let e=class e{constructor(){this.store=g(J),this.service=g(K),this.router=g(X),this.route=g(Ye),this.book$=this.route.paramMap.pipe(Y(i=>i.get("isbn")),ke(i=>this.service.getSingle(i)))}update(i){this.service.update(i).subscribe(r=>{this.store.load(),this.router.navigate(["/books",r.isbn])})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=I({type:e,selectors:[["bm-book-edit"]],standalone:!0,features:[N],decls:4,vars:3,consts:[[3,"book"],[3,"submitBook","book"]],template:function(r,s){if(r&1&&(l(0,"h1"),h(1,"Edit Book"),u(),Be(2,fi,1,1,"bm-book-form",0),$e(3,"async")),r&2){let a;R(2),Re((a=We(3,1,s.book$))?2:-1,a)}},dependencies:[ve,ze]});let t=e;return t})();var gn=[{path:"",redirectTo:"create",pathMatch:"full"},{path:"create",component:It,title:"Create New Book"},{path:"edit/:isbn",component:St,title:"Edit Book"}];export{gn as adminRoutes};
