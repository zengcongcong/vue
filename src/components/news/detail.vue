<template>
    <div>
        <div class="news-title">
            <h4 v-text="newsData.title"></h4>
            <p class='mui-ellipsis'>
                <span>发表时间：{{newsData.add_time  | dateFormat}}</span>
                <span>点击：{{newsData.click}}次</span>
            </p>
        </div>
        <div class="news-content" v-html="newsData.content">

        </div>
    </div>
</template>

<script>
import config from "../../config"


export default {
    data() {
        return {
            newsData: {}
        }
    },
    created() {
        this.$http.get(config.apiUrl + "/api/getnew/" + this.$route.params.id).then(function(res) {
            var data = res.body;
            if (data.status == 0) {
                console.log(data);
                this.newsData = data.message[0]
            }
        })
    }

}
</script>

<style>
.mui-ellipsis{
    color: #26A2FF;
    display: flex;
    justify-content: space-between;
}

.news-title{
    border-bottom: 1px solid #ccc;
}

.news-content{
    padding:10px;
}
</style>


