// ============================================================
//  data.js — 所有个人信息集中在这里，修改内容只需改这个文件
// ============================================================

const SITE = {
  // ---- 基本信息 ----
  name: "Ruijie Jiang",
  shortName: "R. Jiang",
  title: "Senior Machine Learning Engineer",
  badge: "Open to collaborations",
  heroDesc:
    "Senior Machine Learning Engineer at LinkedIn Premium AI team. " +
    "Ph.D. from Tufts University (2024). " +
    "My research focuses on contrastive representation learning, knowledge distillation, and LLMs. " +
    "I build scalable ML systems for ads ranking, pricing, domain adaptation, and LLM distillation.",

  // ---- 联系方式 ----
  email: "ruijie.jiang0210@gmail.com",
  github: "https://github.com/ruijiejiang",
  linkedin: "https://www.linkedin.com/in/ruijie-jiang/",
  scholar: "https://scholar.google.com/citations?user=dXgr0nsAAAAJ&hl=en&oi=ao",

  // ---- 工作经历 ----
  experience: [
    {
      org: "LinkedIn",
      role: "Senior Machine Learning Engineer",
      date: "Mar 2026 - Present",
      tag: "Current",
      tagColor: "blue",
      desc: "Premium AI team. LLM distillation and generative recommendation. Rebuilt core Premium Upsell system including ads ranking, pricing, and domain adaptation.",
    },
    {
      org: "LinkedIn",
      role: "Machine Learning Engineer",
      date: "Oct 2024 - Mar 2026",
      tag: "LinkedIn",
      tagColor: "blue",
      desc: "Premium AI team. Working on ads ranking, pricing optimization, domain adaptation, and LLM distillation. Published research on delta knowledge distillation and scalable LLM distillation (LANTERN).",
    },
    {
      org: "Tufts University",
      role: "Ph.D. Researcher — Machine Learning",
      date: "Sep 2018 - May 2024",
      tag: "Ph.D.",
      tagColor: "purple",
      desc: "Research in contrastive representation learning, optimal transport, and hard negative sampling. Published in TMLR and top ML venues. Developed novel frameworks for representation learning with provable geometric guarantees. GPA: 3.8/4.0.",
    },
  ],

  // ---- 教育背景 ----
  education: [
    {
      org: "Tufts University",
      degree: "Ph.D. in Computer Science — Machine Learning",
      date: "Sep 2018 - May 2024 · Medford, MA",
      tag: "Ph.D.",
      tagColor: "green",
      desc: "Specialization in contrastive representation learning, optimal transport, and knowledge distillation. 100+ citations. GPA: 3.8/4.0.",
    },
    {
      org: "Nanjing Normal University (南京师范大学)",
      degree: "B.S. in Physics",
      date: "Aug 2014 - Jun 2018 · Nanjing, China",
      tag: "B.S.",
      tagColor: "blue",
      desc: "National Outstanding Graduate · Outstanding Bachelor's Thesis Award · Principal Investigator, National College Student Innovation Program · Outstanding Student Leader · Vice President, University Student Union",
    },
  ],

  // ---- 技术栈 ----
  skills: [
    {
      icon: "🧠",
      category: "Machine Learning",
      items: ["PyTorch", "Contrastive Learning", "Knowledge Distillation", "LLMs", "NLP", "Optimal Transport", "Deep Learning"],
    },
    {
      icon: "💻",
      category: "Programming",
      items: ["Python", "Java", "Scala", "SQL", "C++"],
    },
    {
      icon: "🛠",
      category: "Infrastructure",
      items: ["Kubernetes", "Spark", "Docker", "AWS", "Git", "Distributed Training"],
    },
  ],

  // ---- 论文发表 ----
  publications: [
    {
      title: "Delta Knowledge Distillation for Large Language Models",
      authors: "<strong>R. Jiang</strong>, et al.",
      venue: "arXiv, 2025",
      link: "https://arxiv.org/abs/2509.14526",
    },
    {
      title: "LANTERN: Scalable Distillation of Large Language Models for Job-Person Fit and Explanation",
      authors: "<strong>R. Jiang</strong>, et al.",
      venue: "arXiv, 2025",
      link: "https://arxiv.org/abs/2510.05490",
    },
    {
      title: "Hard-Negative Sampling for Contrastive Learning: Optimal Representation Geometry and Neural-vs Dimensional-Collapse",
      authors: "<strong>R. Jiang</strong>, T. Nguyen, S. Aeron, P. Ishwar",
      venue: "TMLR, 2025",
      link: "https://arxiv.org/abs/2311.05139",
    },
    {
      title: "On Neural Collapse in Contrastive Learning with Imbalanced Datasets",
      authors: "<strong>R. Jiang</strong>, et al.",
      venue: "Machine Learning",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dXgr0nsAAAAJ&citation_for_view=dXgr0nsAAAAJ:YsMSGLbcyi4C",
    },
    {
      title: "Hard Negative Sampling via Regularized Optimal Transport for Contrastive Representation Learning",
      authors: "<strong>R. Jiang</strong>, P. Ishwar, S. Aeron",
      venue: "Machine Learning",
      link: "https://arxiv.org/abs/2111.03169",
    },
    {
      title: "Supervised Contrastive Learning with Hard Negative Samples",
      authors: "<strong>R. Jiang</strong>, T. Nguyen, P. Ishwar, S. Aeron",
      venue: "Machine Learning",
      link: "https://arxiv.org/abs/2209.00078",
    },
    {
      title: "Measure Estimation in the Barycentric Coding Model",
      authors: "<strong>R. Jiang</strong>, et al.",
      venue: "Machine Learning",
      link: "https://arxiv.org/abs/2201.12195",
    },
    {
      title: "Systematic Comparison of Semi-supervised and Self-supervised Learning for Medical Image Classification",
      authors: "<strong>R. Jiang</strong>, et al.",
      venue: "Machine Learning",
      link: "https://arxiv.org/abs/2307.08919",
    },
    {
      title: "Interpretable Contrastive Word Mover's Embedding",
      authors: "<strong>R. Jiang</strong>, J. Gouvea, E. Miller, D. Hammer, S. Aeron",
      venue: "NLP",
      link: "https://arxiv.org/abs/2111.01023",
    },
    {
      title: "Automatic Coding of Students' Writing via Contrastive Representation Learning in the Wasserstein Space",
      authors: "<strong>R. Jiang</strong>, J. Gouvea, D. Hammer, E. Miller, S. Aeron",
      venue: "Education & ML",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dXgr0nsAAAAJ&citation_for_view=dXgr0nsAAAAJ:u5HHmVD_uO8C",
    },
    {
      title: "Scalable Machine Learning Approach to Classifying Transportation Noise at Two Urban Sites in Greater Boston",
      authors: "<strong>R. Jiang</strong>, et al.",
      venue: "Environmental Science",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dXgr0nsAAAAJ&citation_for_view=dXgr0nsAAAAJ:d1gkVwhDpl0C",
    },
    {
      title: "Analyzing Students' Written Arguments by Combining Qualitative and Computational Approaches",
      authors: "<strong>R. Jiang</strong>, et al.",
      venue: "Education Research",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dXgr0nsAAAAJ&citation_for_view=dXgr0nsAAAAJ:qjMakFHDy7sC",
    },
    {
      title: "Machine Learning Analysis of Student Frames in Open-Structure Lab Courses",
      authors: "<strong>R. Jiang</strong>, et al.",
      venue: "Education Research",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dXgr0nsAAAAJ&citation_for_view=dXgr0nsAAAAJ:u-x6o8ySG0sC",
    },
  ],

  // ---- 新闻动态 ----
  news: [
    { date: "2026-03", text: "Promoted to Senior Machine Learning Engineer at LinkedIn!" },
    { date: "2026-02", text: 'Received [In]finity & Beyond Award at LinkedIn Premium All Hands — recognized for organization-level impact through execution rigor.' },
    { date: "2025-11", text: "PhD research reached 100+ academic citations milestone!" },
    { date: "2025-10", text: 'Paper "Delta Knowledge Distillation for Large Language Models" released on arXiv.' },
    { date: "2025-06", text: "Celebrated two-year anniversary of my wife's PhD — reflecting on the journey together." },
    { date: "2025-04", text: 'Paper "Hard-Negative Sampling for Contrastive Learning" accepted to TMLR! Reviewer: "very nice and neat unifying theory."' },
    { date: "2024-05", text: "Completed Ph.D. at Tufts University!" },
    { date: "2024-10", text: "Joined LinkedIn as Machine Learning Engineer on the Premium AI team." },
    // 添加更多新闻：{ date: "YYYY-MM", text: "..." }
  ],

  // ---- 学术博客 ----
  // 每篇博客是一个对象，包含标题、日期、标签、摘要
  // 详细内容放在 posts/ 文件夹下的单独 HTML 文件中
  blogPosts: [
    // 示例条目 — 替换成你自己的读论文笔记
    {
      title: "Hard-Negative Sampling for Contrastive Learning: Neural Collapse vs Dimensional Collapse",
      date: "2025-03-15",
      tags: ["Contrastive Learning", "Neural Collapse", "Theory", "TMLR"],
      summary: "A deep dive into our TMLR paper: why contrastive losses are universally minimized by Neural Collapse geometry, how hard-negative sampling creates steeper gradients toward the optimum, and why feature normalization is critical to avoid Dimensional Collapse.",
      link: "posts/neural-collapse.html",
    },
    {
      title: "Supervised Contrastive Learning with Hard Negative Samples",
      date: "2024-05-10",
      tags: ["Contrastive Learning", "Hard Negatives", "Supervised Learning"],
      summary: "How combining label information with hard-negative sampling creates a more effective contrastive learning method. We introduce H-SCL, prove that H-UCL upper bounds H-SCL, and show consistent gains on image and graph benchmarks.",
      link: "posts/hard-scl.html",
    },
    {
      title: "Delta Knowledge Distillation for Large Language Models",
      date: "2025-09-18",
      tags: ["LLM", "Knowledge Distillation", "NLP"],
      summary: "Instead of forcing a small student to match a large teacher's output, Delta-KD teaches the student to replicate the teacher's behavioral transformation during SFT. A parallelogram relationship in log-probability space, with consistent wins over Forward KL, Reverse KL, SeqKD, and MiniLLM.",
      link: "posts/delta-kd.html",
    },
    // 添加更多博客：复制上面的对象格式
  ],

  // ---- 日夜模式时间段 (24h) ----
  dayStart: 6,
  dayEnd: 18,
};
