// QA / is_test (Heaven Group plan, W5). A submission is a test when it carries the QA_TOKEN
// Worker secret (sent from a tab opened with ?qa=<token>) or the legacy marker that the
// shared lead service also recognises. Tests never create an Odoo lead or a sheet row,
// and internal alerts go to team@thestacc.com only.
export const LEGACY_TEST_MARKER = 'TEST - ignore (automated form check)';
export const TEAM_COPY = 'team@thestacc.com';

export function isQaSubmission(body: Record<string, unknown>, qaToken?: string): boolean {
  const token = String(qaToken || '');
  if (token && String(body.qa_token ?? '') === token) return true;
  return ['name', 'companyName'].some((k) => String(body[k] ?? '').trim().startsWith(LEGACY_TEST_MARKER));
}
