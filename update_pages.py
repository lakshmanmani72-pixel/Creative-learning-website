import os
import re

nav_old = re.compile(r'<nav class="site-nav">.*?</nav>', re.DOTALL)
nav_new = """<nav class="site-nav">
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
</nav>"""

script_tag = '<script src="main.js"></script>'

for filename in os.listdir('.'):
    if filename.endswith('.html') and filename != 'index.html':
        filepath = filename
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Replace nav
        new_content = nav_old.sub(nav_new, content)
        
        # Add script tag before </body> if not present
        if script_tag not in new_content:
            new_content = new_content.replace('</body>', f'{script_tag}\n</body>')
            
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(new_content)

print("Updated all HTML files.")
