<table border="0" cellspacing="0" cellpadding="0" style="margin-top: 7px;">
    <tbody>
    <tr>
        <td>
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                @foreach ($bullets as $k => $row)
                    <tr>
                        <td valign="top" align="left" style="border-bottom:none; padding: 5px 0;">
                            <table align="left" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="22" valign="top" align="left"
                                        style="font-size:14px;  color:#00bdff; font-weight:bold;">
                                        &bull;
                                    </td>
                                    <td valign="middle" align="left"
                                        style="font-size:14px;">
                                        {!! $row !!}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
