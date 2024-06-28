document.addEventListener("DOMContentLoaded", function() {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];

    function generateDomains(pronoun, adj, noun) {
        let domains = [];
        for (let p of pronoun) {
            for (let a of adj) {
                for (let n of noun) {
                    domains.push(p + a + n + ".com");
                }
            }
        }
        return domains;
    }

    function displayDomains(domains) {
        const domainList = document.getElementById('domains');
        domains.forEach(domain => {
            let li = document.createElement('li');
            li.textContent = domain;
            domainList.appendChild(li);
        });
    }

    let generatedDomains = generateDomains(pronoun, adj, noun);
    displayDomains(generatedDomains);
});
