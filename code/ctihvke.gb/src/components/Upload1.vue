<template>
  <input type="file" id="files" name="files" v-show="false" multiple :onchange="selectFile" />
  <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="25" height="25" :onclick="clickDiv" />
  兔子股票
</template>

<script lang="ts" setup>
const clickDiv = function () {
  var inputElement = document.getElementById('files')
  inputElement.click()
}

const selectFile = function (event) {
  const files = event.target.files
  for (let index = 0; index < files.length; index++) {
    const file = files[index]
    getBase64(file)
  }
}

const getBase64 = function (file: File) {
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      let r = Math.round(Math.random() * 100000)

      compressImage(e.target.result, (event) => {
        let data =
          `<template>
            <a-image src="` +
          event.target.result +
          `" />
          </template>`
        downloadFile(data, 'img' + r + '.vue', 'text/plain')
      })
    }
    reader.readAsDataURL(file)
  }
}

const compressImage = function (src, callback) {
  const img = new Image()
  img.src = src
  img.onload = function () {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0)
    canvas.toBlob(
      (blob) => {
        // let url =console.log(URL.createObjectURL(blob))
        // window.URL.revokeObjectURL(url)
        let reader = new FileReader()
        reader.onload = function (event) {
          callback(event)
        }
        reader.readAsDataURL(blob)
      },
      'image/webp',
      0.95
    )
  }
}

const downloadFile = function (data, fileName, mimeType) {
  const blob = new Blob([data], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')

  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()

  setTimeout(() => {
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }, 0)
}
</script>

<style scoped>
.clickdiv{
  width: 100%;
  height: 50px;
  background: #333;
}
</style>
