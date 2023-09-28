const fs = require('fs');
const path = require('path');
const sass = require('sass');
const glob = require('glob');

// Define o diretório de arquivos estático
const baseDir = 'public/styles';
// Usando glob para encontrar os arquivos .sass nos subdiretórios
const scssFiles = glob.sync('**/*.scss', { cwd: baseDir });
// Pasta de saída dos .sass compilados
const outputDir = 'public/styles';

// Esta condiional certifia que a pasta de saída exista e em caso contrário, é criada
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

scssFiles.forEach((scssFilePath) => {
  const scssFullPath = path.join(baseDir, scssFilePath);
  // Defina o nome dos arquivos de saída com base nos arquivo .sass
  const cssFileName = path.basename(scssFilePath, '.scss') + '.css';
  const cssFilePath = path.join(outputDir, cssFileName);
  // faz a compilação
  const result = sass.renderSync({
    file: scssFullPath,
    outFile: cssFilePath,
    sourceMap: true, // Gerenciar mapa de origem
  });
  // Escreva o arquivo entrada para a saída
  fs.writeFileSync(cssFilePath, result.css.toString());
  console.log(`Arquivo SCSS '${scssFullPath}' compilado para '${cssFilePath}'`);
});
