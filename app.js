let navDropdownBtn = document.querySelector('.links-dropdown')
let navDropdown = document.querySelector('.links-dropdown div')
navDropdown.style.display = 'none'
/* PRIME-LOOT DROPDOWN */
let PrimeLootDropdownBtn = document.querySelector('.prime-loot')
let PrimeLootDropdown = document.querySelector('.prime-loot-dropdown')
PrimeLootDropdown.style.display = 'none'
/* NOTIFICATIONS DROPDOWN */
let NotificationsDropdownBtn = document.querySelector('.notifications')
let NotificationsDropdown = document.querySelector('.notifications-dropdown')
NotificationsDropdown.style.display = 'none'

function navItemClickDropDown(btn, dropdown) {
// clicking on the btn
  window.addEventListener('click', (event) => {
    
    if (btn.contains(event.target)) {
      dropdown.style.display = 'flex'
      btn.style.boxShadow = '0 0 2px 0px white'
    } else {
      dropdown.style.display = 'none'
      btn.style.boxShadow = 'none'
    }

  })
}

navItemClickDropDown(navDropdownBtn, navDropdown)
navItemClickDropDown(PrimeLootDropdownBtn, PrimeLootDropdown)
navItemClickDropDown(NotificationsDropdownBtn, NotificationsDropdown)


/* USER SETTINGS DROPDOWN */
let userSettingsBtn = document.querySelector('.user')
let userSettingsDropdown = document.querySelector('.user-settings-dropdown')
let userSettingsArrow = document.querySelector('.user-arrow-dropdown')
userSettingsDropdown.style.top = "-466.688px"
userSettingsDropdown.style.opacity = "0"
userSettingsArrow.style.transform = "translateY(-50%) rotate(-90deg)"

window.addEventListener('click', (event) => {
  if (userSettingsBtn.contains(event.target)) {
    
    if (userSettingsDropdown.style.top === "-466.688px") {
      userSettingsDropdown.style.top = "51px"
      userSettingsArrow.style.transform = "translateY(-50%) rotate(90deg)"
      userSettingsBtn.style.boxShadow = "0 0 2px #a08ec9"
      userSettingsDropdown.style.opacity = "1"
    } else if (event.target.offsetParent.className !== "user-settings-dropdown") {
      userSettingsDropdown.style.top = "-466.688px"
      userSettingsArrow.style.transform = "translateY(-50%) rotate(-90deg)"
      userSettingsBtn.style.boxShadow = "none"
      userSettingsDropdown.style.opacity = "0"
    }
  } else if (event.target.offsetParent === null) {
      userSettingsDropdown.style.top = "-466.688px"
      userSettingsArrow.style.transform = "translateY(-50%) rotate(-90deg)"
      userSettingsBtn.style.boxShadow = "none"
      userSettingsDropdown.style.opacity = "0"
  }
})
