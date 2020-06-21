<template>
    <div class="wrapper">
        <h2 class="header-title">{{headerTitle}}</h2>
        <div class="container container-1">
            <div class="row">
                <h6 class="col-md-3 label">Select Comparison Languages :</h6>
                <div class="col-md-9 langs-container">
                    <ul class="chbx-container">
                        <li v-for="lang in languages" :key="lang.id"><input type="checkbox" :id="lang.id"
                                                                            :value="lang.id"
                                                                            v-model="checkedLanguages"><label
                                :for="lang.id">{{lang.title}}</label></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container container-2">
            <div class="row">
                <h6 class="col-md-3 label">Select Comparison Content :</h6>
                <div class="col-md-9 content-select">
                    <b-form-select v-model="selectedContent" :options="contents"
                                   v-on:change="compare"></b-form-select>
                </div>
            </div>
        </div>
        <div class="container container-3">
            <div class="row">
                <div class="col-md-12">
                    <component :is="dynamicComponent" :dataSelected="checkedLanguages"></component>
                </div>
            </div>
        </div>

        <a href="https://www.linkedin.com/in/amr-alsaidy-10a98b90/" class="author">© 2020 amr.alsaidy</a>
    </div>
</template>

<script>
    import Keywords from "../components/1basics/1Keywords";
    import DataTypes from "../components/1basics/2DataTypes";
    import Comments from "../components/1basics/3Comments";

    import Declaration from "../components/2variables/11Declaration";
    import TypeCasting from "../components/2variables/12TypeCasting";
    import Scope from "../components/2variables/13Scope";
    import Constants from "../components/2variables/14Constants";
    import Operators from "../components/2variables/15Operators";

    import IfElse from "../components/3control_systems/30IfElse";
    import TernaryOperator from "../components/3control_systems/31TernaryOperator";
    import SwitchCase from "../components/3control_systems/32SwitchCase";
    import WhenKotlin from "../components/3control_systems/33WhenKotlin";
    import For from "../components/3control_systems/34For";
    import Foreach from "../components/3control_systems/35Foreach";
    import ForInPython from "../components/3control_systems/36ForInPython";
    import ForInJs from "../components/3control_systems/37ForInJs";
    import While from "../components/3control_systems/38While";
    import DoWhile from "../components/3control_systems/39DoWhile";

    import Arrays from "../components/4arrays/50Arrays";
    import IndexedArrays from "../components/4arrays/51IndexedArrays";
    import AssocArrays from "../components/4arrays/52AssocArrays";
    import MultiDimArrays from "../components/4arrays/53MultiDimArrays";
    import ListsPython from "../components/4arrays/54ListsPython";
    import TuplesPython from "../components/4arrays/55TuplesPython";
    import DictionariesPython from "../components/4arrays/56DictionariesPython";
    import SetsPython from "../components/4arrays/57SetsPython";
    import Strings from "../components/4arrays/58Strings";

    import Definitions from "../components/5functions/70Definitions";
    import Parameters from "../components/5functions/71Parameters";
    import Invocation from "../components/5functions/72Invocation";
    import Call from "../components/5functions/73Call";
    import Closures from "../components/5functions/74Closures";
    import CallByValue from "../components/5functions/75CallByValue";
    import CallByReference from "../components/5functions/76CallByReference";
    import DefaultArguments from "../components/5functions/77DefaultArguments";
    import VariableArguments from "../components/5functions/78VariableArguments";
    import AnonymousFunctions from "../components/5functions/79AnonymousFunctions";

    import Classes from "../components/6oop/90Classes";
    import Objects from "../components/6oop/91Objects";
    import ObjectsJs from "../components/6oop/93ObjectsJs";
    import Constructors from "../components/6oop/94Constructors";
    import Inheritance from "../components/6oop/95Inheritance";
    import Overloading from "../components/6oop/96Overloading";
    import Overriding from "../components/6oop/97Overriding";
    import Polymorphism from "../components/6oop/98Polymorphism";
    import Abstraction from "../components/6oop/99Abstraction";
    import Encapsulation from "../components/6oop/100Encapsulation";
    import Interfaces from "../components/6oop/101Interfaces";

    import {languages} from "../data/0init/init_data";
    import {contents} from "../data/0init/init_data";

    export default {
        name: "Home",
        components: {
            Keywords, DataTypes, Comments, //
            Declaration, TypeCasting, Scope, Constants, Operators,//
            IfElse, TernaryOperator, SwitchCase, WhenKotlin, For, Foreach, ForInPython, ForInJs, While, DoWhile, //
            Arrays, IndexedArrays, AssocArrays, MultiDimArrays, ListsPython, TuplesPython, DictionariesPython,
            SetsPython, Strings,//
            Definitions, Parameters, Invocation, Call, Closures, CallByValue, CallByReference, DefaultArguments,
            VariableArguments, AnonymousFunctions,//
            Classes, Objects, ObjectsJs, Constructors, Inheritance, Overloading, Overriding, Polymorphism,
            Abstraction, Encapsulation, Interfaces //
        },
        data() {
            return {
                headerTitle: `Programming Languages <Syntax> Comparison`,
                languages: languages,
                contents: contents,
                checkedLanguages: [],
                selectedContent: 1,
                value: 1,
                dataSelected: []
            }
        },
        methods: {
            compare() {
                this.value = this.selectedContent;
            }
        },
        computed: {
            dynamicComponent() {
                switch (this.value) {
                    case 1:
                        return 'Keywords'
                    case 2:
                        return 'DataTypes'
                    case 3:
                        return 'Comments'         //
                    case 11:
                        return 'Declaration'
                    case 12:
                        return 'TypeCasting'
                    case 13:
                        return 'Scope'
                    case 14:
                        return 'Constants'
                    case 15:
                        return 'Operators'      //
                    case 30:
                        return 'IfElse'
                    case 31:
                        return 'TernaryOperator'
                    case 32:
                        return 'SwitchCase'
                    case 33:
                        return 'WhenKotlin'
                    case 34:
                        return 'For'
                    case 35:
                        return 'Foreach'
                    case 36:
                        return 'ForInPython'
                    case 37:
                        return 'ForInJs'
                    case 38:
                        return 'While'
                    case 39:
                        return 'DoWhile'           //
                    case 50:
                        return 'Arrays'
                    case 51:
                        return 'IndexedArrays'
                    case 52:
                        return 'AssocArrays'
                    case 53:
                        return 'MultiDimArrays'
                    case 54:
                        return 'ListsPython'
                    case 55:
                        return 'TuplesPython'
                    case 56:
                        return 'DictionariesPython'
                    case 57:
                        return 'SetsPython'
                    case 58:
                        return 'Strings'           //
                    case 70:
                        return 'Definitions'
                    case 71:
                        return 'Parameters'
                    case 72:
                        return 'Invocation'
                    case 73:
                        return 'Call'
                    case 74:
                        return 'Closures'
                    case 75:
                        return 'CallByValue'
                    case 76:
                        return 'CallByReference'
                    case 77:
                        return 'DefaultArguments'
                    case 78:
                        return 'VariableArguments'
                    case 79:
                        return 'AnonymousFunctions'            //
                    case 90:
                        return 'Classes'
                    case 91:
                        return 'Objects'
                    case 92:
                        return 'Switch'
                    case 93:
                        return 'ObjectsJs'
                    case 94:
                        return 'Constructors'
                    case 95:
                        return 'Inheritance'
                    case 96:
                        return 'Overloading'
                    case 97:
                        return 'Overriding'
                    case 98:
                        return 'Polymorphism'
                    case 99:
                        return 'Abstraction'
                    case 100:
                        return 'Encapsulation'
                    case 101:
                        return 'Interfaces'        //
                    default:
                        return 'Keywords'
                }
            }
        }
    }

</script>

<style scoped>

</style>