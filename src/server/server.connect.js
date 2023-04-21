import chalk from 'chalk';

export default function connectToServer(app) {
    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(chalk.bgMagenta('\n [Node.js/Express] Server connected SUCCESSFULLY! '), '🖥️⚙️✨');
        console.log(chalk.white(' Server URL:'), chalk.blue.italic.underline(`http://localhost:${PORT}`));
    });
}
    