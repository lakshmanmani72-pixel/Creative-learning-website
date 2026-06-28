const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir);

const navOldRegex = /<nav class="site-nav">[\s\S]*?<\/nav>/;
const navNew = `<nav class="site-nav">
  <a class="logo" href="index.html">🌟 Fun Learning</a>
  <div class="nav-actions">
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="login.html">Profile</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="join.html">Join Us</a></li>
    </ul>
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle Dark Mode">🌙</button>
    <button class="hamburger" id="hamburger" aria-label="Menu">☰</button>
  </div>
</nav>`;

const scriptTag = '<script src="main.js"></script>';

for (const file of files) {
  if (file.endsWith('.html') && file !== 'index.html') {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(navOldRegex, navNew);
    
    if (!content.includes('src="main.js"')) {
      content = content.replace('</body>', `${scriptTag}\n</body>`);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
console.log('Updated all HTML files.');
