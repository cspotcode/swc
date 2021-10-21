var CompilerDiagnostics1;
export { CompilerDiagnostics1 as CompilerDiagnostics };
(function(CompilerDiagnostics) {
    CompilerDiagnostics.debug = false;
    CompilerDiagnostics.diagnosticWriter = null;
    CompilerDiagnostics.analysisPass = 0;
    function Alert(output) {
        if (diagnosticWriter) {
            diagnosticWriter.Alert(output);
        }
    }
    CompilerDiagnostics.Alert = Alert;
    function debugPrint(s) {
        if (debug) {
            Alert(s);
        }
    }
    CompilerDiagnostics.debugPrint = debugPrint;
    function assert(condition, s) {
        if (debug) {
            if (!condition) {
                Alert(s);
            }
        }
    }
    CompilerDiagnostics.assert = assert;
})(CompilerDiagnostics1 || (CompilerDiagnostics1 = {
}));
