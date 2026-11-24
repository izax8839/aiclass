/**
 * AI Nexus Academy - 메인 인터랙션 스크립트
 */

document.addEventListener('DOMContentLoaded', () => {
  // Lucide 아이콘 초기화
  if (window.lucide) {
    lucide.createIcons();
  }

  // 네비게이션 스크롤 효과
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add('shadow-lg', 'bg-opacity-95');
      } else {
        navbar.classList.remove('shadow-lg', 'bg-opacity-95');
      }
    }
  });

  // 모바일 메뉴 토글
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // 모바일 메뉴 항목 클릭 시 메뉴 닫기
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 코스 필터링 기능 (홈페이지 코스 섹션)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.course-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 액티브 스타일 변경
      filterBtns.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-indigo-500/30');
        b.classList.add('bg-gray-800/80', 'text-gray-400');
      });
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-indigo-500/30');
      btn.classList.remove('bg-gray-800/80', 'text-gray-400');

      const filter = btn.getAttribute('data-filter');

      courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 200);
        }
      });
    });
  });

  // FAQ 아코디언 토글
  setupAccordion();

  // 모달 제어
  setupModals();

  // 폼 제출 이벤트
  setupForms();
});

// 아코디언 설정
function setupAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.accordion-icon');
      const isOpen = content.classList.contains('open');

      // 다른 아코디언 닫기 (선택 사항)
      const parent = header.closest('.accordion-group');
      if (parent) {
        parent.querySelectorAll('.accordion-content').forEach(c => {
          if (c !== content) {
            c.classList.remove('open');
            const otherIcon = c.previousElementSibling?.querySelector('.accordion-icon');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        });
      }

      if (isOpen) {
        content.classList.remove('open');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.add('open');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// 모달 제어 함수
function setupModals() {
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  
  // 모달 닫기 버튼들
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  // 오버레이 클릭 시 닫기
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  // ESC 키 누르면 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalOverlays.forEach(overlay => {
        if (overlay.classList.contains('active')) {
          closeModal(overlay);
        }
      });
    }
  });
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// 코스 상세 모달 열기 (홈페이지에서 간편 확인용)
function openCourseDetailModal(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById('courseDetailModal');
  if (!modal) return;

  // 내용 채우기
  document.getElementById('modalCourseBadge').innerText = course.badge;
  document.getElementById('modalCourseTitle').innerText = course.title;
  document.getElementById('modalCourseSubtitle').innerText = course.subtitle;
  document.getElementById('modalCourseLevel').innerText = course.level;
  document.getElementById('modalCourseDuration').innerText = course.duration;
  document.getElementById('modalCourseSchedule').innerText = course.schedule;
  document.getElementById('modalCourseFormat').innerText = course.format;
  document.getElementById('modalCoursePrice').innerHTML = `
    <span class="text-2xl font-bold text-white">${course.priceDiscount}</span>
    <span class="text-sm text-gray-500 line-through ml-2">${course.priceNormal}</span>
    <span class="text-xs px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-semibold ml-2">${course.discountRate} 할인</span>
  `;

  // 스킬 태그
  const skillsContainer = document.getElementById('modalCourseSkills');
  if (skillsContainer) {
    skillsContainer.innerHTML = course.skills.map(skill => `
      <span class="px-2.5 py-1 text-xs rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">${skill}</span>
    `).join('');
  }

  // 수강 대상
  const targetsContainer = document.getElementById('modalCourseTargets');
  if (targetsContainer) {
    targetsContainer.innerHTML = course.targets.map(target => `
      <li class="flex items-start text-sm text-gray-300">
        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0 mt-0.5"></i>
        <span>${target}</span>
      </li>
    `).join('');
  }

  // 주차별 커리큘럼
  const curriculumContainer = document.getElementById('modalCourseCurriculum');
  if (curriculumContainer) {
    curriculumContainer.innerHTML = course.curriculum.map((item, index) => `
      <div class="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50">
        <button type="button" class="accordion-header w-full flex items-center justify-between p-4 text-left hover:bg-gray-800/40 transition">
          <div class="flex items-center space-x-3">
            <span class="px-2.5 py-1 rounded bg-indigo-900/50 text-indigo-400 font-bold text-xs">${item.week}</span>
            <span class="font-medium text-white text-sm sm:text-base">${item.title}</span>
          </div>
          <i data-lucide="chevron-down" class="accordion-icon w-4 h-4 text-gray-400 transition-transform"></i>
        </button>
        <div class="accordion-content ${index === 0 ? 'open' : ''} px-4 pb-4">
          <ul class="space-y-2 mt-2 pt-2 border-t border-gray-800 text-sm text-gray-400">
            ${item.details.map(d => `<li class="flex items-start"><span class="text-indigo-400 mr-2">•</span><span>${d}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  // 실습 프로젝트
  const projectsContainer = document.getElementById('modalCourseProjects');
  if (projectsContainer) {
    projectsContainer.innerHTML = course.projects.map(proj => `
      <div class="p-3.5 rounded-lg bg-gray-800/60 border border-gray-700/50">
        <h5 class="text-sm font-semibold text-white mb-1">${proj.title}</h5>
        <p class="text-xs text-gray-400">${proj.desc}</p>
      </div>
    `).join('');
  }

  // 링크 설정
  const fullPageLink = document.getElementById('modalFullPageLink');
  if (fullPageLink) {
    fullPageLink.href = course.detailPage;
  }

  const applyBtn = document.getElementById('modalApplyBtn');
  if (applyBtn) {
    applyBtn.onclick = () => {
      closeModal(modal);
      openApplyModal(course.id);
    };
  }

  // 아이콘 재생성
  if (window.lucide) {
    lucide.createIcons();
  }
  setupAccordion();

  openModal(modal);
}

// 수강 신청 모달 열기
function openApplyModal(selectedCourseId = '') {
  const modal = document.getElementById('applyModal');
  if (!modal) return;

  const select = document.getElementById('applyCourseSelect');
  if (select && selectedCourseId) {
    select.value = selectedCourseId;
  }

  openModal(modal);
}

// 폼 처리 및 토스트 알림
function setupForms() {
  const forms = document.querySelectorAll('form[data-ajax-form]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // 필수값 체크
      const nameInput = form.querySelector('[name="name"]');
      const phoneInput = form.querySelector('[name="phone"]');

      if (!nameInput || !nameInput.value.trim()) {
        showToast('성함을 입력해 주세요.', 'error');
        return;
      }
      if (!phoneInput || !phoneInput.value.trim()) {
        showToast('연락처를 입력해 주세요.', 'error');
        return;
      }

      // 폼 제출 로딩 상태
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg> 접수 중...
        `;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        // 모달 닫기
        const parentModal = form.closest('.modal-overlay');
        if (parentModal) {
          closeModal(parentModal);
        }

        form.reset();
        showToast('성공적으로 수강 및 상담 신청이 접수되었습니다! 담당 매니저가 2시간 내로 연락드립니다.', 'success');
      }, 1000);
    });
  });
}

// 토스트 메시지 띄우기
function showToast(message, type = 'success') {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-xl shadow-2xl flex items-center space-x-3 text-sm transform translate-y-20 opacity-0 pointer-events-none transition-all duration-300 border';
    document.body.appendChild(toast);
  }

  if (type === 'success') {
    toast.className = 'fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-xl shadow-2xl flex items-center space-x-3 text-sm border bg-gray-900 border-emerald-500/50 text-emerald-300 shadow-emerald-500/10 pointer-events-auto';
    toast.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
        <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <div>
        <p class="font-semibold text-white">신청 완료</p>
        <p class="text-xs text-gray-300 mt-0.5">${message}</p>
      </div>
    `;
  } else {
    toast.className = 'fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-xl shadow-2xl flex items-center space-x-3 text-sm border bg-gray-900 border-rose-500/50 text-rose-300 shadow-rose-500/10 pointer-events-auto';
    toast.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
        <svg class="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </div>
      <div>
        <p class="font-semibold text-white">확인 필요</p>
        <p class="text-xs text-gray-300 mt-0.5">${message}</p>
      </div>
    `;
  }

  // 애니메이션 나타남
  setTimeout(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  }, 10);

  // 4초 후 사라짐
  setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.classList.add('pointer-events-none');
    }, 300);
  }, 4500);
}
