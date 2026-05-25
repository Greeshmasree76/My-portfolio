import jsPDF from 'jspdf';

export function generateResumePdf(portfolio) {
  const doc = new jsPDF('p', 'mm', 'a4');

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  function checkPageSpace(requiredSpace = 20) {
    if (y + requiredSpace > pageHeight - 18) {
      doc.addPage();
      y = 18;
    }
  }

  function sectionTitle(title) {
    checkPageSpace(14);
    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(25, 25, 25);
    doc.text(title.toUpperCase(), margin, y);

    y += 2;
    doc.setDrawColor(90, 90, 90);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;
  }

  function normalText(text, size = 10, lineHeight = 5) {
    if (!text) return;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(size);
    doc.setTextColor(45, 45, 45);

    const lines = doc.splitTextToSize(text, contentWidth);

    lines.forEach((line) => {
      checkPageSpace(lineHeight);
      doc.text(line, margin, y);
      y += lineHeight;
    });
  }

  function bulletText(text) {
    if (!text) return;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(45, 45, 45);

    const lines = doc.splitTextToSize(text, contentWidth - 5);

    checkPageSpace(6);
    doc.text('•', margin, y);
    doc.text(lines[0], margin + 5, y);
    y += 5;

    lines.slice(1).forEach((line) => {
      checkPageSpace(5);
      doc.text(line, margin + 5, y);
      y += 5;
    });
  }

  function smallLink(label, value) {
    if (!value) return;

    checkPageSpace(5);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 30);
    doc.text(`${label}:`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 80, 160);
    doc.text(value, margin + 24, y);

    y += 5;
  }

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 15, 15);
  doc.text(portfolio.name || 'Your Name', margin, y);

  y += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(90, 70, 150);
  doc.text(portfolio.role || 'Developer', margin, y);

  y += 8;

  doc.setFontSize(9.5);
  doc.setTextColor(55, 55, 55);

  const contactLine = [
    portfolio.email,
    portfolio.phone,
    portfolio.location
  ]
    .filter(Boolean)
    .join(' | ');

  doc.text(contactLine, margin, y);
  y += 6;

  const linksLine = [
    portfolio.links?.github,
    portfolio.links?.linkedin,
    portfolio.links?.leetcode
  ]
    .filter(Boolean)
    .join(' | ');

  const linkLines = doc.splitTextToSize(linksLine, contentWidth);
  linkLines.forEach((line) => {
    doc.text(line, margin, y);
    y += 5;
  });

  y += 2;
  doc.setDrawColor(120, 120, 120);
  doc.line(margin, y, pageWidth - margin, y);
  y += 7;

  // Summary
  sectionTitle('Professional Summary');
  normalText(portfolio.about || portfolio.headline);

  // Skills
  sectionTitle('Technical Skills');

  Object.entries(portfolio.skills || {}).forEach(([category, skills]) => {
    checkPageSpace(6);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(30, 30, 30);
    doc.text(`${category}:`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(45, 45, 45);

    const skillText = Array.isArray(skills) ? skills.join(', ') : skills;
    const skillLines = doc.splitTextToSize(skillText, contentWidth - 32);

    doc.text(skillLines[0] || '', margin + 32, y);
    y += 5;

    skillLines.slice(1).forEach((line) => {
      doc.text(line, margin + 32, y);
      y += 5;
    });
  });

  // Projects
  sectionTitle('Projects');

  (portfolio.projects || []).forEach((project, index) => {
    checkPageSpace(18);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(20, 20, 20);
    doc.text(`${index + 1}. ${project.title}`, margin, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(70, 70, 70);
    doc.text(project.category || '', margin, y);
    y += 5;

    bulletText(project.description);
    bulletText(project.problem);

    if (project.features?.length) {
      project.features.slice(0, 5).forEach((feature) => bulletText(feature));
    }

    if (project.stack?.length) {
      bulletText(`Tech Stack: ${project.stack.join(', ')}`);
    }

    if (project.resumeBullet) {
      bulletText(project.resumeBullet);
    }

    if (project.live) {
      smallLink('Live', project.live);
    }

    if (project.github) {
      smallLink('GitHub', project.github);
    }

    y += 3;
  });

  // Education
  sectionTitle('Education');

  (portfolio.education || []).forEach((edu) => {
    checkPageSpace(15);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(25, 25, 25);
    doc.text(edu.degree || '', margin, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(55, 55, 55);
    doc.text(`${edu.college || ''} | ${edu.duration || ''}`, margin, y);
    y += 5;

    if (edu.details) {
      normalText(edu.details, 9.5, 5);
    }
  });

  // Footer
  const totalPages = doc.internal.getNumberOfPages();

  for (let i = 1; i <= totalPages; i += 1) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(
      `Generated from portfolio | Page ${i} of ${totalPages}`,
      margin,
      pageHeight - 8
    );
  }

  doc.save('Greeshma_Sree_Putti_Resume.pdf');
}