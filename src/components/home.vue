<template>
  <div class="body" id="home">
    <v-container>
      <v-row>
        <v-col
          md="3"
          sm="6"
          cols="3"
          v-for="(item, index) in washMachine"
          :key="index"
        >
          <v-card max-width="350" min-height="290px" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">{{ item.title }}</div>
                <v-list-item-title class="text-h5 mb-1">
                  <h4>ราคา ฿{{ item.price }}</h4>
                </v-list-item-title>

                <v-list-item-subtitle> </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <span v-if="item.status">สถานะ : ว่าง</span>
                  <span v-if="!item.status">สถานะ : ไม่ว่าง</span>
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80">
                <img :src="item.image" />
              </v-list-item-avatar>
            </v-list-item>

            <v-card
              class="boxTime"
              max-width="240px"
              min-height="100px"
              outlined
            >
              <div class="time">
                <h1>
                  {{ item.min | fomatTime() }} : {{ item.sec | fomatTime() }}
                </h1>
              </div>
            </v-card>

            <v-card-actions>
              <v-btn
                class="buttonCoin"
                :disabled="!item.status"
                outlined
                rounded
                text
                @click="buttonCoin(item, index)"
                >฿ 10</v-btn
              >
              <v-btn
                class="buttonStart"
                outlined
                rounded
                text
                :disabled="item.status"
                min-width="170px"
                @click="buttonStart(index)"
                >เริ่มซัก</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  filters: {
    fomatTime(value) {
      if (value < 10) {
        return "0" + value;
      } else {
        return value;
      }
    },
  },
  data() {
    return {
      washMachine: [
        {
          id: 1,
          title: "เครื่องหมายเลข 1",
          image:
            "https://static.wixstatic.com/media/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png/v1/fill/w_320,h_320,q_90/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png",
          price: 40,
          status: true,
          min: 0,
          sec: 0,
        },
        {
          id: 2,
          title: "เครื่องหมายเลข 2",
          image:
            "https://static.wixstatic.com/media/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png/v1/fill/w_320,h_320,q_90/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png",
          price: 40,
          status: true,
          min: 0,
          sec: 0,
        },
        {
          id: 3,
          title: "เครื่องหมายเลข 3",
          image:
            "https://static.wixstatic.com/media/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png/v1/fill/w_320,h_320,q_90/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png",
          price: 40,
          status: true,
          min: 0,
          sec: 0,
        },
        {
          id: 4,
          title: "เครื่องหมายเลข 4",
          image:
            "https://static.wixstatic.com/media/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png/v1/fill/w_320,h_320,q_90/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png",
          price: 40,
          status: true,
          min: 0,
          sec: 0,
        },
        {
          id: 5,
          title: "เครื่องหมายเลข 5",
          image:
            "https://static.wixstatic.com/media/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png/v1/fill/w_320,h_320,q_90/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png",
          price: 40,
          status: true,
          min: 0,
          sec: 0,
        },
        {
          id: 6,
          title: "เครื่องหมายเลข 6",
          image:
            "https://static.wixstatic.com/media/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png/v1/fill/w_320,h_320,q_90/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png",
          price: 40,
          status: true,
          min: 0,
          sec: 0,
        },
        {
          id: 7,
          title: "เครื่องหมายเลข 7",
          image:
            "https://static.wixstatic.com/media/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png/v1/fill/w_320,h_320,q_90/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png",
          price: 40,
          status: true,
          min: 0,
          sec: 0,
        },
        {
          id: 8,
          title: "เครื่องหมายเลข 8",
          image:
            "https://static.wixstatic.com/media/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png/v1/fill/w_320,h_320,q_90/2cd43b_a0cbabf8659a45a58fa7f479af673452~mv2.png",
          price: 40,
          status: true,
          min: 0,
          sec: 0,
        },
      ],
    };
  },
  methods: {
    buttonCoin(item, index) {
      this.washMachine[index].price = item.price - 10;
      if (this.washMachine[index].price <= 0) {
        this.washMachine[index].price = 0;
        this.washMachine[index].status = false;
      }
    },

    buttonStart(index) {
      const startingMinutes = 1.5;
      let time = startingMinutes * 60;

      setInterval(() => {
        this.washMachine[index].min = Math.floor(time / 60);
        this.washMachine[index].sec = time % 60;
        console.log(this.washMachine[index].min);
        console.log(this.washMachine[index].sec);
        time = time - 1;
        if (this.washMachine[index].sec == 59) {
          axios.get("http://localhost:3000/");
        }
        if (
          this.washMachine[index].min <= 0 &&
          this.washMachine[index].sec <= 0
        ) {
          time = 0;
          this.washMachine[index].status = true;
        }
      }, 1000);
    },
  },
};
</script>

<style>
.body {
  margin-top: 40px;
}
.routerLink {
  text-decoration: none;
}
.boxTime {
  margin: 0;
  position: absolute;
  top: 0px;
  left: 15px;
  z-index: 1;
}
.time {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.buttonCoin {
  position: absolute;
  top: 5px;
  left: 5px;
}
.buttonStart {
  position: absolute;
  top: 5px;
  left: 7px;
}
</style>