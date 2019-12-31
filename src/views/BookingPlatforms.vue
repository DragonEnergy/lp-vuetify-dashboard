<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <material-card
          color="green"
          title="Booking List"
          text="Listed here is a list of all encountered web platforms"
        >
          <v-data-table
            :items="platforms"
            :headers="headers"
          >
          <template
            slot="headerCell"
            slot-scope="{ header }"
            >
          <span
            class="subheading font-weight-light text--darken-3"
            v-text="header.text"
            />
          </template>
          <template
            slot="items"
            slot-scope="{ item }"
          >
            <td>{{ item.text }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.google }}</td>
            <td>{{ item.facebook }}</td>
            <td>{{ item.microsoft }}</td>
            <td>{{ item.gtm }}</td>
            <td>{{ item.ftp }}</td>
          </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      platforms: [],
      headers:[],
      errors: []
    };
  },
  created() {
    axios.get(`http://localhost:3000/api/booking`)
    .then(response => {
      this.platforms = response.data.platforms;
      this.headers = response.data.headers;
      console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
