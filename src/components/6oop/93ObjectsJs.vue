<template>
    <div>
        <div id="c" v-if="dataSelected.includes('c')">
            <h4 class="lang-title">C</h4>
            <pre class="code-box">
               <prism class="rounded" language="c">{{code_c}}</prism>
            </pre>
        </div>

        <!-- ############################ -->

        <div id="cpp" v-if="dataSelected.includes('cpp')">
            <h4 class="lang-title">C++</h4>
            <pre class="code-box">
               <prism class="rounded" language="cpp">{{code_cpp}}</prism>
            </pre>
        </div>

        <!-- ############################ -->

        <div id="csharp" v-if="dataSelected.includes('csharp')">
            <h4 class="lang-title">C#</h4>
            <pre class="code-box">
               <prism class="rounded" language="csharp">{{code_csharp}}</prism>
            </pre>
        </div>

        <!-- ############################ -->

        <div id="java" v-if="dataSelected.includes('java')">
            <h4 class="lang-title">Java</h4>
            <pre class="code-box">
               <prism class="rounded" language="java">{{code_java}}</prism>
            </pre>
        </div>

        <!-- ############################ -->

        <div id="kotlin" v-if="dataSelected.includes('kotlin')">
            <h4 class="lang-title">Kotlin</h4>
            <pre class="code-box">
               <prism class="rounded" language="kotlin">{{code_kotlin}}</prism>
            </pre>
        </div>

        <!-- ############################ -->

        <div id="python" v-if="dataSelected.includes('python')">
            <h4 class="lang-title">Python</h4>
            <pre class="code-box">
               <prism class="rounded" language="python">{{code_python}}</prism>
            </pre>
        </div>

        <!-- ############################ -->

        <div id="js" v-if="dataSelected.includes('js')">
            <h4 class="lang-title">JavaScript</h4>
            <pre class="code-box">
               <prism class="rounded" language="javascript">{{code_js}}</prism>
            </pre>
        </div>

        <!-- ############################ -->

        <div id="php" v-if="dataSelected.includes('php')">
            <h4 class="lang-title">PHP</h4>
            <pre class="code-box">
               <prism class="rounded" language="php">{{code_php}}</prism>
            </pre>
        </div>
    </div>
</template>

<script>
   import {fetchData} from "../../data/6oop/93_objects_js";

    export default {
        name: "ObjectsJs",
        props:['dataSelected'],
        data() {
            return fetchData()
        },
        components: {}
    }
</script>

<style scoped>

</style>