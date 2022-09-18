
<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>

<template>


  <header>

    <h1 v-if = message > {{ message }} </h1>
    <h1 v-else > New task </h1>
    <span class="tag">Images</span>

  </header>

    <div class="container">

      <form class="create-task-form">

        <label form='labeler-task' for='task-title'>
          Task title
        </label>
        <input v-model="message" placeholder='Untitled task' />

        <label form='labeler-task' for='task-prompt'>
          What prompt should we give our labelers?
        </label>
        <input placeholder='e.g., Is this lesion benign or malignant?' />

      </form>

    </div>

</template>
