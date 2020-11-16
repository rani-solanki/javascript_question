for (let i = 0; i < 10; i++) {
    const promise = new Promise((resolve, reject) => {
        const timeout = Math.random() * 1000;
        console.log(timeout)
        setTimeout(() => {
            console.log(i);
        }, timeout);
    });
}