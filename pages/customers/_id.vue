<template>
<div>
    <div>
        <a href="/" class="button--grey">
            トップ画面へ
        </a>
        <a href="/customers" class="button--grey">
            利用者一覧
        </a>
        <a href="/customers/edit" class="button--grey">
            利用者編集
        </a>
    </div>
    <h2>{{ }}様の詳細</h2>
</div>
</template>

<script>
export default {
        name: "CustomerDetail",
        props: {
            
        }
    }
</script>
