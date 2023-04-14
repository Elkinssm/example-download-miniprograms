Page({
  downloadAndPreviewImage: function() {
    my.downloadFile({
      url:
        "https://images.unsplash.com/photo-1568632234167-789922ea3cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      success({ apFilePath }) {
        my.showActionSheet({
          title: "¿Qué acción desea realizar?",
          items: ["Descargar imagen", "Ver imagen"],
          success: function(res) {
            if (res.index === 0) {
              my.saveImage({
                url: apFilePath,
                showActionSheet: true,
                success() {
                  my.alert({ content: "Imagen descargada correctamente." });
                },
                fail(res) {
                  my.alert({
                    content: res.errorMessage || res.error
                  });
                }
              });
            } else {
              my.previewImage({
                urls: [apFilePath]
              });
            }
          }
        });
      },
      fail(res) {
        my.alert({
          content: res.errorMessage || res.error
        });
      }
    });
  },
  downloadAndPreviewPDF: function() {
    my.downloadFile({
      url:
        "https://www.turnerlibros.com/wp-content/uploads/2021/02/ejemplo.pdf",
      success({ apFilePath }) {
        my.showActionSheet({
          title: "¿Qué acción desea realizar?",
          items: ["Descargar PDF", "Ver PDF"],
          success: function(res) {
            if (res.index === 0) {
              my.saveFile({
                apFilePath: apFilePath,
                success() {
                  my.showToast({
                    content: "PDF descargado con éxito"
                  });
                },
                fail(res) {
                  my.alert({
                    content: res.errorMessage || res.error
                  });
                }
              });
            } else {
              my.openDocument({
                //Especifica el formato de archivo
                fileType: "pdf",
                filePath: apFilePath,
                success() {
                  console.log("Archivo PDF abierto correctamente");
                },
                fail(res) {
                  my.alert({
                    content: res.errorMessage || res.error
                  });
                }
              });
            }
          }
        });
      },
      fail(res) {
        my.alert({
          content: res.errorMessage || res.error
        });
      }
    });
  }
});
