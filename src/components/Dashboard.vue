<template>
  <div id="dashboard">
      <ul class="collection with-header">
          <li class="collection-header">
              <h4>Employees</h4>
          </li>
          <li v-for="employee in employees" :key="employee.id" class="collection-item">{{employee.name}}</li>
      </ul>
      <div class="fixed-action-btn">
          <router-link 
            to="new"
            class="btn-floating btn-large red">
                <i class="fa fa-plus"></i>
            </router-link>
      </div>
  </div>
</template>

<script>
import db from './firebaseinit'
export default {
    name: 'dashboard',
    data() {
        return {
            employess: []
        }
    },
    created() {
        db.collection('employees').get().then(querySnapshot => {
           querySnapshot.forEach(doc => {
               console.log(doc.data);
               const data = {
                   'id': doc.id,
                    'employee_id': doc.data().employee_id,
                    'name': doc.data().name,
                    'dept': doc.data().dept,
                    'position': doc.data().position
               }
               this.employess.push(data)
           }) 
        })
    }
}
</script>

<style>

</style>