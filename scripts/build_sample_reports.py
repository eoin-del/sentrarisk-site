from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    Flowable,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "samples"

INK = colors.HexColor("#102033")
MUTED = colors.HexColor("#607084")
LINE = colors.HexColor("#d9e2ec")
SOFT = colors.HexColor("#f5f8fb")
ACCENT = colors.HexColor("#0e7c86")
ACCENT_LIGHT = colors.HexColor("#dff5f3")
HIGH = colors.HexColor("#b42318")
MEDIUM = colors.HexColor("#b76e00")
LOW = colors.HexColor("#1f7a4d")
AMBER_SOFT = colors.HexColor("#fff4df")
RED_SOFT = colors.HexColor("#fff1f0")
GREEN_SOFT = colors.HexColor("#eaf7ef")


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        "CoverTitle",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=28,
        leading=32,
        textColor=INK,
        spaceAfter=10,
    )
)
styles.add(
    ParagraphStyle(
        "CoverSubtitle",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=11,
        leading=17,
        textColor=MUTED,
        spaceAfter=16,
    )
)
styles.add(
    ParagraphStyle(
        "SectionTitle",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=15,
        leading=19,
        textColor=INK,
        spaceBefore=8,
        spaceAfter=8,
    )
)
styles.add(
    ParagraphStyle(
        "SmallCaps",
        parent=styles["BodyText"],
        fontName="Helvetica-Bold",
        fontSize=7.5,
        leading=10,
        textColor=ACCENT,
        uppercase=True,
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        "Body",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=9.3,
        leading=13.5,
        textColor=colors.HexColor("#334155"),
        spaceAfter=8,
    )
)
styles.add(
    ParagraphStyle(
        "TableBody",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=8.4,
        leading=11.5,
        textColor=colors.HexColor("#334155"),
    )
)
styles.add(
    ParagraphStyle(
        "TableHead",
        parent=styles["BodyText"],
        fontName="Helvetica-Bold",
        fontSize=8,
        leading=10,
        textColor=colors.white,
        alignment=TA_LEFT,
    )
)
styles.add(
    ParagraphStyle(
        "MetricValue",
        parent=styles["BodyText"],
        fontName="Helvetica-Bold",
        fontSize=18,
        leading=22,
        textColor=INK,
        alignment=TA_CENTER,
    )
)
styles.add(
    ParagraphStyle(
        "MetricLabel",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=7.6,
        leading=9.5,
        textColor=MUTED,
        alignment=TA_CENTER,
    )
)


class Rule(Flowable):
    def __init__(self, color=LINE, width=1):
        super().__init__()
        self.color = color
        self.width = width
        self.height = 1

    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.width)
        self.canv.line(0, 0, self.width_available, 0)

    def wrap(self, availWidth, availHeight):
        self.width_available = availWidth
        return availWidth, 4


class RiskBar(Flowable):
    def __init__(self, score: int):
        super().__init__()
        self.score = score

    def wrap(self, availWidth, availHeight):
        self.width = min(availWidth, 115 * mm)
        return self.width, 9 * mm

    def draw(self):
        segments = [
            (0, 40, GREEN_SOFT, LOW),
            (40, 70, AMBER_SOFT, MEDIUM),
            (70, 100, RED_SOFT, HIGH),
        ]
        y = 2 * mm
        h = 4 * mm
        x = 0
        for low, high, fill, stroke in segments:
            w = self.width * ((high - low) / 100)
            self.canv.setFillColor(fill)
            self.canv.setStrokeColor(stroke)
            self.canv.roundRect(x, y, w, h, 2, fill=1, stroke=0)
            x += w
        marker_x = self.width * (self.score / 100)
        self.canv.setFillColor(INK)
        self.canv.circle(marker_x, y + h / 2, 2.8, fill=1, stroke=0)


def p(text: str, style="Body"):
    return Paragraph(text, styles[style])


def table(data, widths, header=True, row_colors=None):
    converted = []
    for r, row in enumerate(data):
        converted.append([
            cell if hasattr(cell, "wrap") else p(str(cell), "TableHead" if header and r == 0 else "TableBody")
            for cell in row
        ])
    t = Table(converted, colWidths=widths, hAlign="LEFT", repeatRows=1 if header else 0)
    commands = [
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.45, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]
    if header:
        commands += [
            ("BACKGROUND", (0, 0), (-1, 0), INK),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ]
    if row_colors:
        for row_idx, fill in row_colors.items():
            commands.append(("BACKGROUND", (0, row_idx), (-1, row_idx), fill))
    t.setStyle(TableStyle(commands))
    return t


def metrics(items):
    cells = []
    for value, label in items:
        cells.append([p(value, "MetricValue"), p(label, "MetricLabel")])
    t = Table([cells], colWidths=[48 * mm] * len(cells), hAlign="LEFT")
    t.setStyle(
        TableStyle(
            [
                ("BOX", (0, 0), (-1, -1), 0.7, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.7, LINE),
                ("BACKGROUND", (0, 0), (-1, -1), SOFT),
                ("TOPPADDING", (0, 0), (-1, -1), 10),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
            ]
        )
    )
    return t


def note_box(title, text, fill=ACCENT_LIGHT):
    t = Table(
        [[p(title, "SmallCaps")], [p(text, "Body")]],
        colWidths=[170 * mm],
        hAlign="LEFT",
    )
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), fill),
                ("BOX", (0, 0), (-1, -1), 0.7, colors.HexColor("#b8e6e1")),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return t


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 16 * mm, 192 * mm, 16 * mm)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 10 * mm, "SentraRisk Systems | Sample report for product evaluation")
    canvas.drawRightString(192 * mm, 10 * mm, f"Page {doc.page}")
    canvas.restoreState()


def cover(title, subtitle, report_type):
    return [
        Spacer(1, 22 * mm),
        p("SENTRARISK SYSTEMS", "SmallCaps"),
        Paragraph(title, styles["CoverTitle"]),
        Paragraph(subtitle, styles["CoverSubtitle"]),
        note_box(
            "Sample report",
            "This document uses sample/anonymised data and is intended to demonstrate the style of evidence SentraRisk can produce for finance, compliance, bookkeeping, and client review workflows.",
            fill=SOFT,
        ),
        Spacer(1, 14 * mm),
        metrics([
            ("Xero", "Supplier bill review"),
            ("PDF", "Client-ready export"),
            ("Human", "Decision-led workflow"),
        ]),
        Spacer(1, 16 * mm),
        table(
            [
                ["Report type", "Prepared for", "Review period"],
                [report_type, "Example SME finance team", "Sample month"],
            ],
            [55 * mm, 60 * mm, 55 * mm],
        ),
        PageBreak(),
    ]


def build_pdf(filename, title, subtitle, report_type, body):
    doc = SimpleDocTemplate(
        str(OUT_DIR / filename),
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=18 * mm,
        bottomMargin=20 * mm,
        title=title,
        author="SentraRisk Systems",
    )
    story = cover(title, subtitle, report_type) + body
    doc.build(story, onFirstPage=footer, onLaterPages=footer)


def board_summary():
    body = [
        p("Executive summary", "SectionTitle"),
        p(
            "The review identified a concentrated set of payment-risk items requiring management attention. Most alerts related to duplicate-looking supplier bills, newly changed beneficiary details, and repeated same-day payment activity.",
        ),
        metrics([
            ("37", "Alerts reviewed"),
            ("8", "High-risk items"),
            ("4", "Recommended controls"),
        ]),
        Spacer(1, 7 * mm),
        note_box(
            "Overall conclusion",
            "The sample organisation shows a moderate control posture. Immediate value would come from supplier-bank-detail checks, duplicate bill review, and a recurring monthly Client Control Pack.",
        ),
        Spacer(1, 8 * mm),
        p("Risk movement", "SectionTitle"),
        table(
            [
                ["Area", "Current position", "Movement", "Management view"],
                ["Duplicate-looking payments", "6 alerts", "Up", "Review before supplier payment runs"],
                ["New supplier details", "4 alerts", "Stable", "Confirm changes with named supplier contact"],
                ["Large same-day payments", "3 alerts", "Up", "Require second approval above threshold"],
                ["Open review items", "5 items", "Down", "Close with reviewer notes before month end"],
            ],
            [44 * mm, 37 * mm, 24 * mm, 65 * mm],
            row_colors={1: RED_SOFT, 3: AMBER_SOFT},
        ),
        Spacer(1, 8 * mm),
        p("Recommended next controls", "SectionTitle"),
        table(
            [
                ["Priority", "Control", "Owner", "Suggested cadence"],
                ["High", "Verify supplier bank-detail changes before payment", "Finance lead", "Every payment run"],
                ["High", "Review duplicate-looking bills above materiality threshold", "Bookkeeper / AP", "Weekly"],
                ["Medium", "Add reviewer notes to all high-risk alerts", "Finance manager", "Monthly"],
                ["Medium", "Export Client Control Pack for leadership review", "Accountant / advisor", "Monthly"],
            ],
            [25 * mm, 72 * mm, 38 * mm, 35 * mm],
        ),
        PageBreak(),
        p("Board discussion points", "SectionTitle"),
        table(
            [
                ["Question", "Why it matters"],
                ["Are supplier-bank-detail changes independently checked?", "This is a common control gap in invoice and payment fraud scenarios."],
                ["Which payment thresholds require second approval?", "Repeated payments below thresholds can indicate weak approval design."],
                ["Are review decisions recorded consistently?", "Decision history supports audit preparation and internal accountability."],
                ["Can monthly risk evidence be shown to management?", "A regular pack helps leadership spot trends before they become losses."],
            ],
            [68 * mm, 102 * mm],
        ),
        Spacer(1, 8 * mm),
        p("Suggested board action", "SectionTitle"),
        p(
            "Approve a 30-day controlled pilot using Xero supplier bills or anonymised exports. The pilot should test alert quality, reviewer workflow, and the usefulness of the Client Control Pack for management reporting.",
        ),
    ]
    build_pdf(
        "sentrarisk-board-summary-sample.pdf",
        "Board Summary",
        "A concise executive report showing risk exposure, alert movement, review outcomes, and recommended next controls.",
        "Board-ready PDF",
        body,
    )


def compliance_pack():
    body = [
        p("Control review overview", "SectionTitle"),
        p(
            "This pack demonstrates how SentraRisk can organise evidence for internal review. It focuses on alert status, reviewer notes, decision history, and the controls that should be strengthened after review.",
        ),
        metrics([
            ("B+", "Control grade"),
            ("92%", "Reviewed alerts"),
            ("5", "Open actions"),
        ]),
        Spacer(1, 7 * mm),
        note_box(
            "Review principle",
            "SentraRisk automates the identification and organisation of payment-risk indicators. Final decisions remain with the accountant, bookkeeper, finance lead, or compliance reviewer.",
        ),
        Spacer(1, 8 * mm),
        p("Evidence checklist", "SectionTitle"),
        table(
            [
                ["Evidence area", "Status", "Reviewer note"],
                ["Supplier bill import completed", "Complete", "Xero supplier bills reviewed for the sample period."],
                ["Duplicate-looking bills reviewed", "Complete", "Potential duplicate items checked against supplier and invoice context."],
                ["New beneficiary details checked", "In progress", "Two supplier records require confirmation before next payment run."],
                ["High-risk alerts assigned", "Complete", "All high-risk alerts have an owner and review status."],
                ["Client Control Pack exported", "Complete", "Pack ready for client or internal finance review meeting."],
            ],
            [54 * mm, 30 * mm, 86 * mm],
            row_colors={3: AMBER_SOFT},
        ),
        Spacer(1, 8 * mm),
        p("Alert decision trail", "SectionTitle"),
        table(
            [
                ["Alert", "Risk", "Status", "Decision rationale"],
                ["Duplicate-looking supplier bill", "High", "Escalated", "Similar amount and supplier reference found within the review window."],
                ["Changed bank details", "High", "Pending", "Requires independent supplier confirmation before payment release."],
                ["Same-day payment cluster", "Medium", "Reviewed", "Business explanation accepted; monitor next cycle."],
                ["Unusual invoice timing", "Medium", "Reviewed", "Timing aligns with quarter-end supplier billing pattern."],
            ],
            [45 * mm, 24 * mm, 28 * mm, 73 * mm],
            row_colors={1: RED_SOFT, 2: RED_SOFT},
        ),
        PageBreak(),
        p("Recommended control actions", "SectionTitle"),
        table(
            [
                ["Action", "Priority", "Target outcome"],
                ["Introduce a documented supplier-bank-detail verification step", "High", "Reduce payment redirection risk."],
                ["Set a second-review rule for repeated payments to the same supplier", "High", "Improve visibility over cumulative exposure."],
                ["Maintain reviewer notes for all high-risk alerts", "Medium", "Create a defensible evidence trail."],
                ["Run a monthly Client Control Pack for client or management review", "Medium", "Turn monitoring into a repeatable finance-control process."],
            ],
            [78 * mm, 27 * mm, 65 * mm],
        ),
        Spacer(1, 8 * mm),
        p("Reviewer sign-off", "SectionTitle"),
        table(
            [
                ["Role", "Name", "Date", "Sign-off"],
                ["Finance reviewer", "Sample reviewer", "Sample date", "Reviewed"],
                ["Accountant / advisor", "Sample advisor", "Sample date", "Ready for discussion"],
            ],
            [42 * mm, 44 * mm, 35 * mm, 49 * mm],
        ),
    ]
    build_pdf(
        "sentrarisk-compliance-pack-sample.pdf",
        "Compliance Pack",
        "An evidence pack for internal review, including reviewer notes, alert status, risk reasons, and decision history.",
        "Audit-ready PDF",
        body,
    )


def transaction_risk_report():
    body = [
        p("Transaction summary", "SectionTitle"),
        table(
            [
                ["Field", "Sample value"],
                ["Supplier", "Northline Facilities Ltd"],
                ["Amount", "EUR 12,850.00"],
                ["Source", "Xero supplier bill import"],
                ["Review status", "Escalate before approval"],
                ["Assigned reviewer", "Finance lead"],
            ],
            [58 * mm, 112 * mm],
        ),
        Spacer(1, 8 * mm),
        p("Risk score", "SectionTitle"),
        metrics([
            ("87/100", "Risk score"),
            ("High", "Risk level"),
            ("Review", "Recommended action"),
        ]),
        Spacer(1, 6 * mm),
        RiskBar(87),
        Spacer(1, 8 * mm),
        note_box(
            "Primary review outcome",
            "The transaction should be reviewed before release because it combines a material amount, recently changed beneficiary information, and duplicate-payment indicators.",
            fill=RED_SOFT,
        ),
        Spacer(1, 8 * mm),
        p("Score drivers", "SectionTitle"),
        table(
            [
                ["Driver", "Signal", "Review impact"],
                ["Amount threshold", "Payment exceeds normal SME review threshold", "Adds materiality to the alert."],
                ["New beneficiary details", "Supplier payment details recently changed", "Requires independent confirmation."],
                ["Duplicate-payment risk", "Similar supplier amount appears in the sample period", "Check invoice number and supporting evidence."],
                ["Timing pattern", "Raised close to payment run cut-off", "Review before payment release."],
            ],
            [45 * mm, 70 * mm, 55 * mm],
            row_colors={2: RED_SOFT, 3: AMBER_SOFT},
        ),
        PageBreak(),
        p("Reviewer actions", "SectionTitle"),
        table(
            [
                ["Step", "Action", "Evidence to record"],
                ["1", "Confirm supplier bank details using an independent contact route", "Named contact, date, and confirmation method."],
                ["2", "Check for duplicate invoice number, amount, and payment reference", "Invoice evidence and comparison result."],
                ["3", "Confirm business reason for the payment timing", "Approver note or supplier statement."],
                ["4", "Approve, hold, or reject with reviewer rationale", "Final decision and owner."],
            ],
            [18 * mm, 82 * mm, 70 * mm],
        ),
        Spacer(1, 8 * mm),
        p("Decision note template", "SectionTitle"),
        note_box(
            "Reviewer note",
            "Payment held pending independent supplier-bank-detail confirmation. Duplicate-payment check to be completed against Xero bill history before approval.",
            fill=SOFT,
        ),
        Spacer(1, 8 * mm),
        p("Control recommendation", "SectionTitle"),
        p(
            "If similar alerts recur, introduce a standing control requiring second approval for supplier-bank-detail changes and duplicate-looking supplier bills above the agreed materiality threshold.",
        ),
    ]
    build_pdf(
        "sentrarisk-transaction-risk-report-sample.pdf",
        "Transaction Risk Report",
        "A transaction-level report explaining score drivers, supplier indicators, duplicate-payment risk, and review recommendations.",
        "Risk detail PDF",
        body,
    )


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    board_summary()
    compliance_pack()
    transaction_risk_report()


if __name__ == "__main__":
    main()
