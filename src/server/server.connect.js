import chalk from 'chalk';

export default function connectToServer(app) {
    // const PORT = process.env.PORT;
    app.listen(process.env.PORT, () => {
        console.log(chalk.bgMagenta('\n [Node.js/Express] Server connected SUCCESSFULLY! '), '🖥️⚙️✨');
        console.log(chalk.white(' Server URL:'), chalk.blue.italic.underline(`http://localhost:${process.env.PORT}`));
    });
}
    