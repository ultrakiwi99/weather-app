!<template>
  <table>
    <tbody>
      <tr>
        <td>Morning</td>
        <td>{{ daytemp.morning }}</td>
      </tr>
      <tr>
        <td>Day</td>
        <td>{{ daytemp.day }}</td>
      </tr>
      <tr>
        <td>Evening</td>
        <td>{{ daytemp.evening }}</td>
      </tr>
      <tr>
        <td>Night</td>
        <td>{{ daytemp.night }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DayTemp",
  props: {
    daytemp: Object
  }
};
</script>

<style lang="scss" scoped>
table td {
  text-align: left;
  padding-left: 2rem;

  @media screen and (max-width: 414px) {
    padding: 0;
  }
}
</style>
